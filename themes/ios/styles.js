var { makeStyles } = require('../../index');
var requirer = (name) => require('./styles/' + name);

module.exports = makeStyles(requirer, [
  'Alert',
  'Badge',
  'Bar',
  'BarItem',
  'Block',
  'Button',
  'ButtonGroup',
  'Card',
  'CardList',
  'Chat',
  'ChatItem',
  'Checkbox',
  'Container',
  'DottedViewList',
  'Dots',
  'Drawer',
  'Gallery',
  'GalleryCard',
  'GalleryImage',
  'Input',
  'Label',
  'LayoutLeftNav',
  'List',
  'ListItem',
  'Menu',
  'ModalButton',
  'ModalPortal',
  'NestedViewList',
  'PopoverPortal',
  'Radio',
  'SearchBar',
  'StaticContainer',
  'Swiper',
  'TextArea',
  'Title',
  'TitleBar',
  'View'
]);