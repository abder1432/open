import React, { useState } from 'react';
import { 
  PageHeader, 
  Card,
  Form,
  Input,
  Tooltip,
  Cascader,
  Statistic,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Upload, 
  message,
  Descriptions
} from 'antd';
import { LoadingOutlined, PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import ChangePassword from './ChangePassword';
import DocumentUploader from '../../components/DocumentUploader';
import Transfers from './Transfers';

const { Option } = Select;



const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 24,
      offset: 0,
    },
  },
};


const Financials = () => { 
  
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 'auto' }} defaultValue={'+966'}>
      <Option value="966">+966</Option>
        <Option value="212">+212</Option>
        <Option value="87">+45</Option>
        <Option value="2">+2</Option>
      </Select>
    </Form.Item>
  );

  
  return(
  <div>


  <div>


      <Card  bordered={false} bodyStyle={{ padding: 40, marginBottom: 20 }}>
   

      <Descriptions title="Account Statement">
        <Descriptions.Item label="Creadit">SAR 53005</Descriptions.Item>
        <Descriptions.Item label="Debit">SAR 2343</Descriptions.Item>
        <Descriptions.Item label="Balance">SAR 3236</Descriptions.Item>
      </Descriptions>

     </Card>

       <Transfers />

   
       

   
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      labelAlign="left"
      colon={false}
      size="large"
      onFinish={onFinish}
      initialValues={{
        accounts: [],
        commissionـrate: '10',
        transfers_period: '15'
      }}
      scrollToFirstError
    >

      <Card 
        bordered={false} 
        bodyStyle={{ padding: 40 }}
        title="Accounts"
        style={{ marginBottom: 30 }}
      >

             <Form.List     
                  name={['accounts']}
                >

           
                  {(fields, { add, remove }) => (
                    <div className="ant-table ant-table-small">
                    <table>
                      <thead className="ant-table-thead">
                      <tr>
                        <th>{'Bank name'}</th>
                        <th>{'Account number'}</th>
                        <th>{'IBAN'}</th>
                        <th></th>
                      </tr>
                      </thead>
                      <tbody className="ant-table-tbody">
                      {fields.map(field => (
                        <tr className="ant-table-row ant-table-row-level-0">
  
                          <td className="ant-table-cell">

                            <Form.Item
                              {...field}
                              name={[field.name, 'bank_name']}
                              fieldKey={[field.fieldKey, 'bank_name']}
                              rules={[{ required: true, message: 'Missing bank name' }]}
                              noStyle
                            >
                              <Input />
                            </Form.Item>

                          </td>


                          <td className="ant-table-cell">

                          <Form.Item
                            {...field}
                            name={[field.name, 'number']}
                            fieldKey={[field.fieldKey, 'number']}
                            rules={[{ required: true, message: 'Missing account number' }]}
                            noStyle
                          >
                            <Input />
                          </Form.Item>

                          </td>

                          <td className="ant-table-cell">

                          <Form.Item
                            {...field}
                            name={[field.name, 'iban']}
                            fieldKey={[field.fieldKey, 'iban']}
                            rules={[{ required: true, message: 'Missing IBAN' }]}
                            noStyle
                          >
                            <Input />
                          </Form.Item>

                          </td>

                          <td className="ant-table-cell">

                          <MinusCircleOutlined onClick={() => remove(field.name)} />

                          </td>
                        </tr>
                      ))}
                      <tr className="ant-table-row ant-table-row-level-0">
                      <td colSpan={7} className="ant-table-cell">

                      <Form.Item noStyle>
                        <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
                          Add account
                        </Button>
                      </Form.Item>
                      </td>
                      </tr>
                      </tbody>
                    </table>
                    </div>
                  )}

                </Form.List>


        </Card>   
        
      <Card 
        bordered={false} 
        bodyStyle={{ padding: 40 }}
        title="Commissions and Rates"
        style={{ marginBottom: 30 }}
      >

      <Form.Item
        name="commissionـrate"
        label="Commission rate"
        rules={[
          {
            required: true,
            message: 'Please input your commission rate!',
          },
        ]}
        
      >
        <Input disabled addonAfter="%" />
      </Form.Item>


      <Form.Item
        name="transfers_period"
        label="The agreed period for financial transfers is limited to a number of days"
      >
        <Input disabled />
      </Form.Item>


      </Card>


      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" size="large" shape="round" htmlType="submit">
          Save Changes
        </Button>
      </Form.Item>


    </Form>


 






  </div>

  </div>
);

  }


export default Financials;