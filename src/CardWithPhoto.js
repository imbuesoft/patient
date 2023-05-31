import React from 'react';
import { Card,  Space, Button } from 'antd';
import { AutoComplete } from 'antd';
import { HeartOutlined,SearchOutlined  } from '@ant-design/icons';

const { Meta } = Card;

const CardWithPhoto = () => {
  const handleLike = () => {
    // Handle the like button click
  };

  const handleSearch = (value) => {
    console.log('Search value:', value);
    // Perform search functionality here
  };

  const handleSelect = (value) => {
    console.log('Selected value:', value);
    // Perform selection functionality here
  };

  const searchOptions = [
    { value: 'company software' },
    { value: 'designing' },
    { value: 'statements' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', top: '20px', right: '30px' }}>
        <AutoComplete
          style={{ width: '300px' }}
          options={searchOptions}
          onSelect={handleSelect}
          onSearch={handleSearch}
          placeholder="Search a course or learning path"
        />
         <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          
      </div>

      <div style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column' }}>
        <Card style={{ marginBottom: '20px' }}>
          <Space align="start" size={12}>
            <div>
              <img height={100} width={100} src={"https://pryormediacdn.azureedge.net/wordpress/2018/10/Motivational-States-Understand-and-Shape-Employee-Motivation-.jpg"} alt="logo 1" />
            </div>
            <Meta title="A Motivators ToolKit 1.0" />
          </Space>
          <Button icon={<HeartOutlined />} onClick={handleLike} />
        </Card>

        <Card style={{ marginBottom: '20px' }}>
          <Space align="start" size={12}>
            <div>
              <img height={100} width={100} src={"https://www.edgepointlearning.com/img/opt/V3uTrX8rP6-420.jpeg"} alt="logo 2" /><br/>
            </div>
            <Meta title="A New way to train Employees 1.0" />
          </Space>
          <Button icon={<HeartOutlined />} onClick={handleLike} />
        </Card>

        <Card>
          <Space align="start" size={12}>
            <div>
              <img height={100} width={100} src={"https://www.litmos.com/wp-content/uploads/2020/09/P107987-aboriginal-torres-strait-islander-inclusion-cultural-safety-course.jpg"} alt="logo 4" />
            </div>
            <Meta title="Aboriginal and Torres Strait Islander Inclusion and Cultural Safety 1.0(AU)" />
          </Space>
          <Button icon={<HeartOutlined />} onClick={handleLike} />
        </Card>

        <Card>
          <Space align="start" size={12}>
            <div>
              <img height={100} width={100} src={"https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2022/11/07013302/Web3-in-Social-Networking.png"} alt="logo 5" />
            </div>
            <Meta title="Adaptive Suite -Electronic Communication and Social Media" />
          </Space>
          <Button icon={<HeartOutlined />} onClick={handleLike} />
        </Card>
        <Card>
          <Space align="start" size={12}>
            <div>
              <img height={100} width={100} src={"https://jirak.net/wp/wp-content/uploads/2023/01/benefits-API-first-microservices_OpenAPI-Spec-678x381.png"} alt="logo 6" />
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