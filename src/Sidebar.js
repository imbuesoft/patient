import React from 'react'
import { Layout, Menu ,Avatar,Dropdown} from 'antd';


import {
  UserOutlined,
  BookOutlined,
  NotificationOutlined,
  AppstoreOutlined,
  CustomerServiceOutlined,
  PhoneOutlined,
  MedicineBoxOutlined,
  InfoCircleOutlined,
  HomeOutlined,
  LogoutOutlined
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
    const menu = (
        <Menu>
          <Menu.Item key="profile">
            <a href="/profile">
              <UserOutlined />
              Profile
            </a>
          </Menu.Item>
          <Menu.Item key="logout">
            <a href="/logout">
              <LogoutOutlined />
              Logout
            </a>
          </Menu.Item>
        </Menu>
      );
  return (
    <>

       <Sider width={200} className="site-layout-background" style={{ background: '#f0f2f5' }}>
       <div style={{ display: 'flex', justifyContent: 'center', padding: '16px' }}>
          <Avatar size={64} icon={<UserOutlined />} />
        </div>
        <Menu
          mode="inline"
          theme="dark" 
          
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 ,background: '#17202A',color:'#fff',border:0,borderRadius:'10px'}}
          
        >
          <Menu.SubMenu key="sub1" icon={<HomeOutlined />} title="Home">
            <Menu.Item key="1">Hospital Overview</Menu.Item>
            <Menu.Item key="2">Mission and Vision</Menu.Item>
            <Menu.Item key="3">Quality and Accreditation</Menu.Item>
            <Menu.Item key="4">Our Team</Menu.Item>
            <Menu.Item key="5">Facilities</Menu.Item>
            
          </Menu.SubMenu>
         
          <Menu.SubMenu
            key="sub2"
            icon={<AppstoreOutlined />}
            title="Departments"
          >
            <Menu.Item key="6">Cardiology</Menu.Item>
            <Menu.Item key="7">Neurology</Menu.Item>
            <Menu.Item key="8">Orthopedics</Menu.Item>
            <Menu.Item key="9">Pediatrics</Menu.Item>
            <Menu.Item key="10">Obstetrics and Gynecology</Menu.Item>
            <Menu.Item key="11">Oncology</Menu.Item>
            <Menu.Item key="12">Dermatology</Menu.Item>
            <Menu.Item key="13">Ophthalmology</Menu.Item>
            <Menu.Item key="14">Psychiatry</Menu.Item>
            <Menu.Item key="15">Radiology</Menu.Item>
            <Menu.Item key="16">Emergency Medicine</Menu.Item>
            <Menu.Item key="17">Internal Medicine</Menu.Item>

          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub3"
            icon={<UserOutlined />}
            title="Doctors"
          >
            <Menu.Item key="18">DR. Prakash Gujarati</Menu.Item>
            <Menu.Item key="19">DR. Bhargav Padhiyar</Menu.Item>
            <Menu.Item key="20">DR. Karan Bhuva</Menu.Item>
            <Menu.Item key="21">DR. Jay Shanghani</Menu.Item>
            <Menu.Item key="22">DR. Dhruhit Akbari</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub4"
            icon={<CustomerServiceOutlined />}
            title="Services"
          >
            <Menu.Item key="23">Emergency Care</Menu.Item>
            <Menu.Item key="24">General Surgery</Menu.Item>
            <Menu.Item key="25">Maternity and Childcare</Menu.Item>
            <Menu.Item key="26">Diagnostic Imaging</Menu.Item>
            <Menu.Item key="27">Laboratory Services</Menu.Item>
            <Menu.Item key="28">Cancer Treatment</Menu.Item>
            <Menu.Item key="29">Cardiac Care</Menu.Item>
            <Menu.Item key="30">Neurological Services</Menu.Item>            
            <Menu.Item key="31">Orthopedic Care</Menu.Item>           
            <Menu.Item key="32">Gastroenterology Services</Menu.Item>           
            <Menu.Item key="33">Rehabilitation Services</Menu.Item>           
            <Menu.Item key="34">Mental Health Services</Menu.Item>           
            <Menu.Item key="35">Dental Care</Menu.Item>           
            <Menu.Item key="36">Respiratory Therapy</Menu.Item>           
            <Menu.Item key="37">Nutrition and Dietetics</Menu.Item>           
            <Menu.Item key="38">Pharmacy Services</Menu.Item>           
            <Menu.Item key="39">Home Healthcare</Menu.Item>           
            <Menu.Item key="40">Palliative Care</Menu.Item>           
            <Menu.Item key="41">Wellness Programs</Menu.Item>     
            <Menu.Item key="42">Health Screenings</Menu.Item>     

          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub5"
            icon={<PhoneOutlined />}
            title="Apoiments"
          >
            <Menu.Item key="43">Book an Appointment</Menu.Item>
            <Menu.Item key="44">Schedule a Visit</Menu.Item>
            <Menu.Item key="45">Request a Consultation</Menu.Item>
            <Menu.Item key="46">Find a Doctor</Menu.Item>
            <Menu.Item key="48">Virtual Appointments</Menu.Item>
            <Menu.Item key="49">Telemedicine Services</Menu.Item>
            <Menu.Item key="50">Outpatient Services</Menu.Item>
            <Menu.Item key="51">Inpatient Services</Menu.Item>
            <Menu.Item key="52">Emergency Appointments</Menu.Item>
            <Menu.Item key="53">Second Opinion Requests</Menu.Item>
            <Menu.Item key="54">Preoperative Assessments</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub6"
            icon={<MedicineBoxOutlined />}
            title="Medical Reports"
          >
            <Menu.Item key="55">Patient Test Results</Menu.Item>
            <Menu.Item key="56">Lab Reports</Menu.Item>
            <Menu.Item key="57">Radiology Reports</Menu.Item>
            <Menu.Item key="58">Pathology Reports</Menu.Item>
            <Menu.Item key="59">Diagnostic Imaging Results</Menu.Item>
            <Menu.Item key="60">Surgical Reports</Menu.Item>
            <Menu.Item key="61">Discharge Summaries</Menu.Item>
            <Menu.Item key="62">Consultation Notes</Menu.Item>
            <Menu.Item key="63">Medical History</Menu.Item>
            <Menu.Item key="64">Immunization Records</Menu.Item>
            <Menu.Item key="65">Insurance Claims and Billing</Menu.Item>

          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub7"
            icon={<BookOutlined />}
            title="Health Resources"
          >
            <Menu.Item key="66">Health Information Articles</Menu.Item>
            <Menu.Item key="67">Patient Education Materials</Menu.Item>
            <Menu.Item key="68">Wellness Tips and Advice</Menu.Item>
            <Menu.Item key="69">Healthy Living Guides</Menu.Item>
            <Menu.Item key="70">Disease Prevention Resources</Menu.Item>
            <Menu.Item key="71">Health and Wellness Blog</Menu.Item>
            <Menu.Item key="72">Exercise and Fitness Resources</Menu.Item>
            <Menu.Item key="73">Nutrition and Diet Resources</Menu.Item>
            <Menu.Item key="74">Mental Health Resources</Menu.Item>
            <Menu.Item key="75">Support Groups and Counseling</Menu.Item>
          </Menu.SubMenu>
          
          <Menu.SubMenu
            key="sub9"
            icon={<InfoCircleOutlined />}
            title="Contact Us"
          >
            <Menu.Item key="76">General Inquiries</Menu.Item>
            <Menu.Item key="77">Careers and Job Opportunities</Menu.Item>
            <Menu.Item key="78">Media and Press Inquiries</Menu.Item>
            <Menu.Item key="79">Vendor Inquiries</Menu.Item>
            <Menu.Item key="81">Donations and Philanthropy</Menu.Item>
            <Menu.Item key="82">Volunteer Opportunities</Menu.Item>
            <Menu.Item key="83">Hospital Administration</Menu.Item>
            <Menu.Item key="84">Website Support</Menu.Item>
          </Menu.SubMenu>
          
        </Menu>
        <Dropdown overlay={menu} placement="topRight">
          <div style={{ display: 'flex', justifyContent: 'center', padding: '16px' }}>
            <Avatar size={32} icon={<UserOutlined />} />
          </div>
        </Dropdown>
      </Sider>
    </>
  )
}

export default Sidebar;
