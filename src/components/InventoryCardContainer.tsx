import styled from '@emotion/styled';
import React from 'react';
import { Error, Loading, InventoryCard } from '.';
import { useData } from '../hooks/useData';
import { InventoryType } from '../types/InventoryType';
import { useState } from 'react';

interface ContainerProps {
  subject: string;
}

export const InventoryCardContainer = ({ subject }: ContainerProps) => {
  const { data, error } = useData(subject);

  const [keyword, setKeyword] = useState('');

  const onSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const keyword = (event.target as HTMLInputElement).value;
    console.log(keyword);
    setKeyword(keyword);
  };

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Container>
      <Searchbox>
        <fieldset>
          <label htmlFor="search"></label>
          <input
            type="text"
            id="search"
            onChange={onSearch}
            placeholder="search anything"
          />
        </fieldset>
      </Searchbox>
      <Table>
        <thead>
          <tr>
            <th>title</th>
            <th>category</th>
            <th>price</th>
            <th>stock</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((value: string) => {
              if (keyword == '') {
                return value;
              } else if (
                value.title.toLowerCase().includes(keyword.toLowerCase())
              ) {
                return value;
              } else if (
                value.category.toLowerCase().includes(keyword.toLowerCase())
              ) {
                return value;
              }
            })
            .map((inventory: InventoryType) => {
              return (
                <InventoryCard
                  inventoryData={inventory}
                  key={`inventory-${inventory.id}`}
                ></InventoryCard>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

const Container = styled.section`
  overflow: scroll;
  overflow-x: hidden;
  height: 400px;
  width: 800px;
  margin: 0 auto;

  &::-webkit-scrollbar {
    width: 18px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(143, 48, 112, 1) 100%
    );

    border-radius: 10px;
    background-clip: padding-box;
    border: 4px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background: linear-gradient(
      0deg,
      rgba(148, 64, 222, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    border-radius: 11px;
    box-shadow: inset 0px 0px 8px purple;
  }
`;

const Searchbox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  input,
  button {
    padding: 5px 10px;
    font-size: 20px;
  }

  input {
    apperance: none;
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: dotted 2px #9440de;
    margin-right: 10px;
    color: #9440de;
    text-align: center;

    &::placeholder {
      color: #8e6abd;
      opacity: 0.5;
    }
  }

  input:focus {
    border-bottom: solid 2px #9440de;
  }

  button {
    color: #9440de;
    background: #ffad2c;
    border: 1px solid #9440de;
    border-radius: 20px;
    transition: ease-in-out 0.2s;

    &:hover {
      color: #ffad2c;
      background: #9440de;
    }
  }
`;

const Table = styled.table`
  margin: 0 auto;
  width: 90%;
  table-layout: fixed;

  th:first-child {
    width: 40%;
  }

  th {
    color: #9440de;
    text-transform: capitalize;
    font-size: 18px;
    background: #ffad2c;
  }

  th,
  td {
    border: 1px solid #9440de;
    padding: 10px;
    border-spacing: 10px;
  }

  td:last-child {
    padding: 0;
    background: #0ea144;
    color: #ffad2c;
  }
`;
