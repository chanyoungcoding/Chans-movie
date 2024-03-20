import CompressionPlugin from 'compression-webpack-plugin';

export default {
  // 기존의 webpack 설정
  plugins: [
    new CompressionPlugin()
  ]
};
