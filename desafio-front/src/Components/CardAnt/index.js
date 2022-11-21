import { Card, Col, Row } from "antd";
import React, { useContext, useState } from "react";
import DataContext from "../../contexts/data";
import TableInfor from "../Table";
import UploadFile from "../UploadFile";

export default function CardAnt() {
  const [lista, setLista] = useState([]);
  const riscMedia = useContext(DataContext);
  return (
    <div className="site-card-wrapper">
      <Row gutter={24}>
        <Col className="infor" span={8}>
          <Card title="Carregar um arquivo" bordered={false}>
            <UploadFile onChange={(data) => setLista(data.list)} />
          </Card>
        </Col>
        <Col className="infor" span={8}>
          <Card title="Métrica de risco para o host" bordered={false}>
            -
          </Card>
        </Col>
        <Col className="infor" span={8}>
          <Card title="Média de risco do ambiente" bordered={false}>
            {riscMedia.cardData > 0 ? riscMedia?.cardData?.toFixed(2) : 0}
          </Card>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={24}>
          <Card title="Tabela" bordered={false}>
            <TableInfor data={lista} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
