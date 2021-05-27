import {View, Image} from '@tarojs/components';
import PropTypes from 'prop-types';

const types = {
  error: 'https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg',
  wait: 'https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg',
};

const containerStyle = {
  display: 'flex',
  height: '100vh',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};

const imageStyle = {
  marginBottom: '1rem',
  width: 120,
  height: 120,
};

const messageStyle = {
  marginBottom: '1rem',
  fontSize: '1.125rem',
};

const detailStyle = {
  color: '#757575',
  marginBottom: '1rem',
};

const Container = ({src, message, detail}) => {
  return (
    <View style={containerStyle}>
      <Image src={src} style={imageStyle} mode="center"/>
      {message && <View style={messageStyle}>{message}</View>}
      {detail && <View style={detailStyle}>{detail}</View>}
    </View>
  );
};

const Ret = ({ret, children}) => {
  if (!ret || typeof ret.code === 'undefined') {
    return '';
  }

  if (ret.code === 0) {
    return children;
  }

  return <View style={containerStyle}>
    <Image src={types[ret.retType || 'error']} style={imageStyle} mode="center"/>
    {ret.message && <View style={messageStyle}>{ret.message}</View>}
    {ret.detail && <View style={detailStyle}>{ret.detail}</View>}
  </View>;
};

Ret.propTypes = {
  ret: PropTypes.shape({
    code: PropTypes.number,
    message: PropTypes.node,
    detail: PropTypes.node,
  }),
  children: PropTypes.node,
};

export default Ret;
