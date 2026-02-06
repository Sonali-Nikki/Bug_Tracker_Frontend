import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import axios from "axios";

const columns = ["To Do", "In Progress", "Done"];

export default function KanbanBoard({ tickets, setTickets }) {
  const onDragEnd = async (result) => {
    if (!result.destination) return;

    const ticketId = result.draggableId;
    const newStatus = result.destination.droppableId;

    setTickets(prev =>
      prev.map(t =>
        t._id === ticketId ? { ...t, status: newStatus } : t
      )
    );

    await axios.put(
      `${import.meta.env.VITE_API_URL}/api/tickets/${ticketId}`,
      { status: newStatus },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map(col => (
          <Droppable droppableId={col} key={col}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-gray-100 rounded p-3 min-h-[300px]"
              >
                <h3 className="font-semibold mb-3">{col}</h3>

                {tickets
                  .filter(t => t.status === col)
                  .map((ticket, index) => (
                    <Draggable
                      key={ticket._id}
                      draggableId={ticket._id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white p-3 mb-2 rounded shadow"
                        >
                          <h4 className="font-medium">{ticket.title}</h4>
                          <p className="text-xs text-gray-500">
                            {ticket.priority}
                          </p>
                        </div>
                      )}
                    </Draggable>
                  ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}
