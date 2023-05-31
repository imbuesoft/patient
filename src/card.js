import React, { useState } from 'react';
import { Card, Space, Button, AutoComplete, Input } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

const { Meta } = Card;

const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div style={{ margin: 'auto' }}>
            <span>
              Found {query} on{' '}
              <a href={`https://s.taobao.com/search?q=${query}`} target="_blank" rel="noopener noreferrer">
                {category}
              </a>
            </span>
            <span>{getRandomInt(500, 500)} results</span>
          </div>
        ),
      };
    });

const CardWithPhoto = () => {
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const handleSelect = (value) => {
    console.log('Selected value:', value);
    // Perform selection functionality here
  };

  const handleLike = () => {
  };

  const searchOptions = [
    { value: 'php' },
    { value: 'laravel' },
    { value: 'react js' },
    { value: 'javascript' }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', top: '20px', right: '30px' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px' }}>
      <CardWithPhoto />
    </div>
        <AutoComplete
          style={{ width: '300px' }}
          options={searchOptions}
          onSelect={handleSelect}
          onSearch={handleSearch}
          placeholder="Search a course or learning path"
        />
      </div>

      <div style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column' }}>
        <Card style={{ marginBottom: '20px' }}>
          <Space align="start" size={12}>
            <div>
              <img
                height={100}
                width={100}
                src={
                  'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3c49af15-7ada-4f9d-a712-f1ad3855eb6e_1100x383.png'
                }
                alt="Logo 1"
              />
            </div>
            <Meta title="A Motivators ToolKit 1.0" />
          </Space>
          <Button icon={<HeartOutlined />} onClick={handleLike} />
        </Card>

        <Card style={{ marginBottom: '20px' }}>
          <Space align="start" size={12}>
            <div>
              <img
                height={100}
                width={100}
                src={'https://www.aihr.com/wp-content/uploads/2020/09/P107987-aboriginal-torres-strait-islander-inclusion-cultural-safety-course.jpg'}
                alt="Logo 2"
              />
            </div>
            <Meta title="A New way to train Employees 1.0" />
          </Space>
          <Button icon={<HeartOutlined />} onClick={handleLike} />
        </Card>

        <Card>
          <Space align="start" size={12}>
            <div>
              <img
                height={100}
                width={100}
                src={'https://images.prismic.io/edapp-website/MjYzNjliNzktNjYyYS00ZWUyLTkwMzctOTM4MjEwMzJiMjlj_adaptive-learning-platforms.png?auto=compress,format&rect=10,0,1340,700&w=1200&h=627'}
                alt="logo 4"
              />
            </div>
            <Meta title="Aboriginal and Torres Strait Islander Inclusion and Cultural Safety 1.0(AU)" />
          </Space>
          <Button icon={<HeartOutlined />} onClick={handleLike} />
        </Card>

        <Card>
          <Space align="start" size={12}>
            <div>
              <img
                height={100}
                width={100}
                src={'https://images3.alphacoders.com/165/thumb-1920-165265.jpg'}
                alt="logo 5"
              />
            </div>
            <Meta title="Adaptive Suite -Electronic Communication and Social Media" />
          </Space>
          <Button icon={<HeartOutlined />} onClick={handleLike} />
        </Card>
        <Card>
          <Space align="start" size={12}>
            <div>
              <img
                height={100}
                width={100}
                src={'https://images3.alphacoders.com/165/thumb-1920-165265.jpg'}
                alt="logo 6"
              />
            </div>
            <Meta title="Adaptive Suite -Privacy 3.0.0(AU)" />
          </Space>
          <Button icon={<HeartOutlined />} onClick={handleLike} />
        </Card>
      </div>
    </div>
  );
};

export default CardWithPhoto;