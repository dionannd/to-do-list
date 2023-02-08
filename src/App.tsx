import { useState } from "react";
import Container from "./components/Container";

function App() {
  return (
    <div className="flex justify-center m-5">
      <div className="flex flex-col items-center">
        <div className="border shadow p-10 flex flex-col gap-10 sm:w-[640px]">
          <Container title="Summary">
            <p>test tailwind</p>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
