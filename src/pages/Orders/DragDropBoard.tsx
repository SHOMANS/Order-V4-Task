import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Card from '../../components/Card';
import Typography from '../../components/Typography';
import { dataColumns } from '../../data/fakeDate';
import { CardDropPlace, CardsSection, StyledBars } from './style';

const onDragEnd = (result: any, columns: any, setColumns: any) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

const DragDropBoard = () => {
  const [columns, setColumns] = useState(dataColumns);

  return (
    <StyledBars>
      <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <section key={columnId}>
              <Typography variant={'h4'} gutterBottom>
                {column.name}
              </Typography>

              <Droppable droppableId={columnId} key={columnId}>
                {(provided, snapshot) => {
                  return (
                    <CardDropPlace {...provided.droppableProps} ref={provided.innerRef} isThisDraggingOver={snapshot.isDraggingOver as any}>
                      <CardsSection>
                        {column.items.map((item, index) => {
                          return (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      opacity: snapshot.isDragging ? '0.2' : '1',
                                      overflow: 'hidden',
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    <Card
                                      isReady={columns[Object.keys(columns)[2]].items.includes(item)}
                                      time={item.time}
                                      price={item.price}
                                      items={item.items}
                                      number={item.number}
                                      auther={item.auther}
                                      phone={item.phone}
                                    />
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </CardsSection>
                    </CardDropPlace>
                  );
                }}
              </Droppable>
            </section>
          );
        })}
      </DragDropContext>
    </StyledBars>
  );
};

export default DragDropBoard;
