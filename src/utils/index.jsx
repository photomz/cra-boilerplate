import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import shortid from 'shortid';

import $ from '../styles/global';

/**
 * Retrieves 1 absolute path to the Webpack processed image from the assets/image folder.
 * @param {string} pathToImage
 * @return {string}
 */
const importOneImage = (pathToImage) => require.context('../assets/images', true)(`./${pathToImage}`);

/**
 * Retrieves 1 SVG image as React Component from assets/image.
 * @param {string} pathToSVG
 * @param {object} props - Extra attribute you wish to add to the SVG component.
 * @returns {React.Component}
 */
const importOneSVG = (pathToSVG, props = {}) => {
  const svgImage = importOneImage(pathToSVG);
  const { defaultProps } = svgImage;

  return svgImage({ ...props, ...defaultProps });
};

/**
 * Returns true if screen is mobile size. False if otherwise.
 * @returns {bool}
 */
const isMobile = () => window.matchMedia($.device.mobile).matches;

/**
 * Returns true if screen is tablet size. False if otherwise.
 * @returns {bool}
 */
const isTablet = () => window.matchMedia($.device.tablet).matches;

/**
 * Returns true if screen is desktop size. False if otherwise.
 * @returns {bool}
 */
const isDesktop = () => window.matchMedia($.device.desktop).matches;

/**
 * Informs if a click outside the selected ref is done.
 * @param {array} refArray - Array of components refs to avoid
 * @param {func} callback - A callback function to run if user clicked outside the array of
 *  components
 */
const useOutsideClick = (refArray, callback) => {
  const handleOutsideClick = (event) => {
    let outsideClick = false;

    if (!(Array.isArray(refArray) && refArray.length > 0)) {
      // eslint-disable-next-line no-console
      console.log('Please pass in an array of refs.');
    }

    refArray.forEach((ref) => {
      if (ref && ref.current && !ref.current.contains(event.target)) {
        if (refArray.length > 1) {
          refArray
            .filter((refPrime) => {
              if (ref === refPrime) {
                return false;
              }
              return true;
            })
            .forEach((refPrime) => {
              if (!refPrime.current.contains(event.target)) {
                outsideClick = true;
              }
            });
        } else {
          outsideClick = true;
        }
      }
    });

    if (outsideClick) {
      callback(event);
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('mousedown', handleOutsideClick);
      }
    };
  }, []);
};

/**
 * Takes in 1 array of objects, and add keys to them.
 * @param {array} items - 1 array of objects.
 * @returns {array}
 */
const addKeys = (items) => items.map((item) => ({ ...item, key: shortid.generate() }));

/**
 * Takes in 1 array of arrays, and add keys to them.
 * @param {array} items - 1 array of arrays.
 * @returns {array}
 */
const addArrayKeys = (items) => items.map((item) => ([...item, shortid.generate()]));

const parseTimeToDayMonth = (item) => {
  const date = new Date(item);
  const day = date.getDate();
  const month = date.toLocaleString('en-us', { month: 'short' });

  return `${day} ${month}`;
};

const parseTimeToDayName = (item) => {
  const date = new Date(item);

  return date.toLocaleString('en-us', { weekday: 'short' });
};

/**
 * Binds an array of actions or 1 action, and dispatches it using useDispatch.
 * @param {[Function]|Function} actions - Array or 1 action.
 * @param {[Function]} deps - Dependencies for useMemo. useMemo will only
 * recompute if one of the dependencies are updated.
 * @returns {[Function]|Function} Array of dispatches or 1 dispatch depending on the passed in data
 */
const useActions = (actions, deps = []) => {
  const dispatch = useDispatch();

  return useMemo(() => {
    if (Array.isArray(actions)) {
      return actions.map((action) => bindActionCreators(action, dispatch));
    }
    return bindActionCreators(actions, dispatch);
  }, [dispatch, ...deps]);
};

export default {
  isMobile,
  isDesktop,
  isTablet,
  importOneImage,
  importOneSVG,
  useOutsideClick,
  addKeys,
  addArrayKeys,
  parseTimeToDayMonth,
  parseTimeToDayName,
  useActions,
};
