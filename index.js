import {View, Image, Block} from '@tarojs/components';
import {AtActivityIndicator} from 'taro-ui';
import PropTypes from 'prop-types';
import './index.scss';

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

const renderRet = (ret, children) => {
  if (!ret || typeof ret.code === 'undefined') {
    return <View style={containerStyle}>
      <AtActivityIndicator content="加载中..." color="var(--mx-colors-primary-500)"/>
    </View>;
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

const Ret = ({ret, children}) => {
  return (
    // 使用 Block 包起来，避免渲染出来位置不正确，导致开发工具无法选中元素
    <Block>
      {renderRet(ret, children)}
    </Block>
  );
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
