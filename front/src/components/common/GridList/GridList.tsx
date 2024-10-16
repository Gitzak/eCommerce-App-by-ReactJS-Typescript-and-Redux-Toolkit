import { Row, Col } from "react-bootstrap";

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
};

const GridList = <T extends { id?: number }>({
  records,
  renderItem,
}: GridListProps<T>) => {
  const renderList =
    records.length > 0
      ? records.map((record) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={record.id}
            className="d-flex justify-content-center mb-2 mt-2"
          >
            {renderItem(record)}
          </Col>
        ))
      : "there are no records";
  return <Row className="g-2">{renderList}</Row>;
};

export default GridList;
