import { useState } from "react";
import { Zap, Brain, MessageCircle, Eye } from "lucide-react";
function App() {
  return (
    <main className="font-Inter grid place-items-center md:h-screen">
      <section className="md:shadow-3xl flex h-[25rem] w-[25rem] flex-col rounded-b-3xl child:rounded-b-3xl md:h-[25rem] md:w-[40rem] md:flex-row md:rounded-3xl md:child:rounded-xl">
        <div className="text-primary-red-light bg-grb-slate-to-royal flex flex-1 flex-col items-center justify-center gap-y-5 p-4">
          <span className="text-xl font-semibold text-white/70">
            Your Result
          </span>
          <div className="bg-grb-persian-to-royal flex h-40 w-40 flex-col items-center justify-center space-y-2 rounded-full">
            <span className="text-neutral-white font-mono text-6xl font-extrabold">
              76
            </span>
            <span className="text-neutral-lavander">of 100</span>
          </div>
          <div className="text-center text-3xl font-medium text-white">
            <p>Great</p>
            <p className="text-neutral-lavander text-center text-sm">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-white p-8">
          <h1 className="text-neutral-gray mb-4 text-xl font-extrabold">
            Summary
          </h1>
          <div className="flex flex-col gap-y-4">
            <div className="bg-primary-red/10 flex justify-between rounded-md px-4 py-2">
              <div className="text-primary-red/80 flex items-center text-sm font-semibold">
                <Zap className="me-2" size={15} /> Reaction
              </div>
              <div className="text-neutral-lavander flex items-center gap-2 font-bold">
                <span className="text-neutral-gray font-bold">80</span> /
                <span className="font-bold">100</span>
              </div>
            </div>
            <div className="bg-primary-yellow/10 flex justify-between rounded-md px-4 py-2">
              <div className="text-primary-yellow/80 flex items-center text-sm font-semibold">
                <Brain className="me-2" size={15} /> Memory
              </div>
              <div className="text-neutral-lavander flex items-center gap-2 font-bold">
                <span className="text-neutral-gray font-bold">92</span> /
                <span className="font-bold">100</span>
              </div>
            </div>
            <div className="bg-primary-teal/10 flex justify-between rounded-md px-4 py-2">
              <div className="text-primary-teal/80 flex items-center text-sm font-semibold">
                <MessageCircle className="me-2" size={15} /> Verbal
              </div>
              <div className="text-neutral-lavander flex items-center gap-2 font-bold">
                <span className="text-neutral-gray font-bold">61</span> /
                <span className="font-bold">100</span>
              </div>
            </div>
            <div className="bg-primary-cobalt/10 flex justify-between rounded-md px-4 py-2">
              <div className="text-primary-cobalt/80 flex items-center text-sm font-semibold">
                <Eye className="me-2" size={15} /> Visual
              </div>
              <div className="text-neutral-lavander flex items-center gap-2 font-bold">
                <span className="text-neutral-gray font-bold">72</span> /
                <span className="font-bold">100</span>
              </div>
            </div>
          </div>
          <button className="bg-neutral-gray hover:bg-neutral-gray/90 mt-10 w-full rounded-full p-4 font-semibold text-white">
            Continue
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
