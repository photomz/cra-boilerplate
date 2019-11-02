/* eslint-disable no-console */
const key = 'react-app';

const loadState = () => {
  console.log('Loading state...');
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
  }
};

const saveState = (state) => {
  console.log('Saving state...');
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.log(err);
    // ignore write errors
  }
};

export { loadState, saveState };
