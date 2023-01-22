export default function getImage(img) {
  // eslint-disable-next-line global-require,import/no-dynamic-require
  return require(`@/assets/${img}`);
}
