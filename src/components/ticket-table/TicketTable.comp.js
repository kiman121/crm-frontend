import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

export const TicketTable = ({ tickets }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Opened Date</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length ? (
            tickets.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.subject}</td>
                <td>{row.status}</td>
                <td>{row.addedAt}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No tickets to show
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
};
