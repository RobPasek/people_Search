import React, { useState, useEffect, useMemo } from 'react';
import './index.css';
import styled from 'styled-components';
import Title from './title';
import Filter from './nameFilter';
import { useTable } from 'react-table';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;



function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
        columns,
        data,
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}> {column.render('Header')} </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function App() {
  const data = React.useMemo( () => [
    {
      "LASTNAME": "Salvatierra",
      "FIRSTNAME": "Zuzu",
      "DEPARTMENT": "Clinical Lab",
      "TITLE": "Laboratory Assistant",
      "EXTENSION": 19001
      },
      {
      "LASTNAME": "Cabrera",
      "FIRSTNAME": "Zurymizraim",
      "DEPARTMENT": "Revenue Cycle Support",
      "TITLE": "Payment Poster",
      "EXTENSION": 0
      },
      {
      "LASTNAME":"Aslami",
      "FIRSTNAME":"Zohal",
      "DEPARTMENT":"Pediatrics",
      "TITLE":"Clinical Nurse II 12 AWS",
      "EXTENSION":0
      },
      {
      "LASTNAME":"Sediqi",
      "FIRSTNAME":"Zohal",
      "DEPARTMENT":"GI Clinic",
      "TITLE":"Medical Assistant",
      "EXTENSION":0
      },
      {
      "LASTNAME":"Feldman",
      "FIRSTNAME":"Zoe",
      "DEPARTMENT":"Mental Health Unit",
      "TITLE":"Unit Assistant",
      "EXTENSION":0
      },
      {
      "LASTNAME":"Ceja",
      "FIRSTNAME":"Zinthia",
      "DEPARTMENT":"5E Multispecialty Unit",
      "TITLE":"Clinical Associate 12 AWS",
      "EXTENSION":0
      },
      {
      "LASTNAME":"Ceja",
      "FIRSTNAME":"Zinthia",
      "DEPARTMENT":"Prim Care Centralized Sched",
      "TITLE":"Scheduler",
      "EXTENSION":0
      },
      {
      "LASTNAME":"Hernandez",
      "FIRSTNAME":"Zinthia",
      "DEPARTMENT":"Neurology Clinic",
      "TITLE":"Medical Assistant 8h",
      "EXTENSION":0
      },
      {
      "LASTNAME":"Gonzales",
      "FIRSTNAME":"Zenicel",
      "DEPARTMENT":"Managed Care",
      "TITLE":"Credentialing Coordinator",
      "EXTENSION":0
      },
      {
      "LASTNAME":"Chhoet",
      "FIRSTNAME":"Zarah",
      "DEPARTMENT":"CS Allergy Research",
      "TITLE":"Research Coordinator",
      "EXTENSION":0
      },
      {
      "LASTNAME":"Noori",
      "FIRSTNAME":"Zara",
      "DEPARTMENT":"Pulmonary Clinic",
      "TITLE":"Medical Assistant PD",
      "EXTENSION":0
      },
      {
      "LASTNAME":"Padilla",
      "FIRSTNAME":"Zane",
      "DEPARTMENT":"CHOC Foundation",
      "TITLE":"Assistant Director, Community Engagement",
      "EXTENSION":0
      },
      {
      "LASTNAME":"Bashqoy",
      "FIRSTNAME":"Zaina",
      "DEPARTMENT":"Pharmacy",
      "TITLE":"Intern Pharmacist - PD",
      "EXTENSION":0
      },
      {
      "LASTNAME":"Hashemi",
      "FIRSTNAME":"Zahra",
      "DEPARTMENT":"Clinical Lab",
      "TITLE":"Clinical Lab Scientist",
      "EXTENSION":19016
      }
    ],
    []
  )


  const columns = React.useMemo(
    () => [
      {
        columns: [
          {
            Header: 'Last Name',
            accessor: 'LASTNAME',
          },
          {
            Header: 'First Name',
            accessor: 'FIRSTNAME',
          },
          {
            Header: 'Department',
            accessor: 'DEPARTMENT',
          },
          {
            Header: 'Title',
            accessor: 'TITLE',
          },
          {
            Header: 'Extention',
            accessor: 'EXTENSION',
          },
        ],
      },
    ],
    []
  );

  

  //const data = React.useMemo(() => makeData(20), []);
/*
  useEffect(()=> {
    const fetchPeople = async () => {
      const rsp = await fetch('/people.json');
      const peoples = await rsp.json();
      setAllpeople(peoples);
    };
    fetchPeople();
  }, []);
*/

  return (
    <div className="App">
      <Title />
      <Filter />
      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
    </div>
  );
    
}

export default App;
