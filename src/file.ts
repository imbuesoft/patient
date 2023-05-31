import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const App = () => {
  const onChange = (info) => {
    console.log(info.fileList);
  };

  const onRemove = (file) => {
    console.log(file);
  };

  return (
    <div>
      <Upload onChange={onChange} onRemove={onRemove}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </div>
  );
};

export default App;
