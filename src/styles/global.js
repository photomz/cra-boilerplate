export default {
  baseNum: 8,
  layout() {
    return {
      margin1: this.baseNum * 16,
      margin2: this.baseNum * 8,
      margin3: this.baseNum * 4,
      margin4: this.baseNum * 2,
      margin5: this.baseNum,
      padding1: this.baseNum * 8,
      padding2: this.baseNum * 4,
      padding3: this.baseNum * 3,
      padding4: this.baseNum * 2,
      padding5: this.baseNum,
      buttonHeight: this.baseNum * 8,
    };
  },
  easingFn: {
    standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
    decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  },
  border() {
    return {
      radius1: this.baseNum * 4,
      radius2: this.baseNum * 2,
      radius3: this.baseNum,
      radius4: this.baseNum / 2,
    };
  },
  color: {
    red: '#FF0000',
    white: '#FAFAFA',
    blue1: '#0167BB',
    blue2: '#003672',
    gray: '#c3c3c3',
  },
  font: {
    family: {
      body: 'Lato',
    },
    weight: {
      regular: 400,
      bold: 700,
      black: 900,
      light: 300,
    },
    size: {
      title: 40,
      subtitle: 32,
      headerBold: 24,
      header: 22,
      body: 18,
      button: 22,
      input: 14,
    },
  },
  ellipsis: `
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  `,
  dropShadow: {
    normal: '0px 3px 8px rgba(0, 0, 0, 0.15)',
    reverseNormal: '0px -3px 8px rgba(0, 0, 0, 0.15)',
    repressed: '0px 8px 12px rgba(0, 0, 0, 0.15)',
    sideBar: '0px 0px 20px rgba(0, 0, 0, 0.25)',
  },
  device: {
    mobile: 'only screen and (max-width: 1199px)',
    tablet: 'only screen and (min-width: 768px) and (max-width: 1199px)',
    desktop: 'only screen and (min-width: 1200px)',
  },
  br: `br {
    content: "";
    display: block;
    margin: 0.75em 0;
  }`,
};
