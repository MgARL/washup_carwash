import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import "react-datepicker/dist/react-datepicker.css";

function DateTimeOptions() {
  const { setDate, setTime, date, time } = useContext(GlobalContext);
  const [startDate, setStartDate] = useState<Date | null>(date);
  const isWeekday = (myDate: Date) => {
    const day = myDate.getDay();
    return day !== 0 && day !== 6;
  };

  const handleDateChange = (myDate: Date | null) => {
    setStartDate(myDate);
    setDate?.(myDate);
  };

  return (
    <Container className="bg2">
      <Row>
        <Col xs={12}>
          <h4>Choose Date:</h4>
        </Col>
        <Col xs={12}>
          <DatePicker
            selected={startDate}
            onChange={(myDate: Date | null) => handleDateChange(myDate)}
            filterDate={isWeekday}
            minDate={new Date()}
            placeholderText="Select Day"
            popperPlacement="bottom"
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12}>
          <h4>Select Time Slot</h4>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs={10} md={3}>
          <FloatingLabel controlId="type" label="Type:">
            <Form.Select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setTime?.(e.target.value)
              }
              value={time}
              required
            >
              <option value="08:00:00">8:00AM-10:00AM</option>
              <option value="10:00:00">10:00AM-12:00AM</option>
              <option value="12:00:00">12:00AM-02:00PM</option>
              <option value="14:00:00">02:00PM-04:00PM</option>
              <option value="16:00:00">04:00PM-06:00PM</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
    </Container>
  );
}

export default DateTimeOptions;
