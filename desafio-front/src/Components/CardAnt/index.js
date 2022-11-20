import { Card, Col, Row } from 'antd';
import React, { useState } from 'react';
import TableInfor from "../Table";
import UploadFile from '../UploadFile';

export default function CardAnt() {
    const [lista, setLista] = useState([]);
    return(
        <div className="site-card-wrapper">
        <Row gutter={24}>
          <Col span={12}>
            <Card title="Carregar um arquivo" bordered={false}>
              <UploadFile onChange={(data)=>setLista(data.list)}/>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Informação" bordered={false}>
             Valor
            </Card>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={24}>
            <Card title="Tabela" bordered={false}>
            <TableInfor data={lista}/>
            </Card>
          </Col>
        </Row>

      </div>
    )
};
