import React from 'react'
import { Box, Table } from 'bloomer'

const Result = ({ card }) => (
  <Box>
    <Table isBordered isFullWidth>
      <thead>
        <tr>
          <td>Name</td>
          <td>ID</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{card.name}</td>
          <td>{card.id}</td>
        </tr>
      </tbody>
    </Table>
  </Box>
)

export default Result
