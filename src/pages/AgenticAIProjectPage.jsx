import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import {
  MdGroups,
  MdCalendarToday,
  MdLightbulb,
  MdTimeline,
  MdEditNote,
  MdChat,
  MdMeetingRoom,
  MdCheckCircle,
  MdRocketLaunch,
  MdOutlineDoneAll,
  MdSummarize,
  MdVisibilityOff,
  MdBlock,
  MdPsychology,
  MdHelpOutline,
  MdSearch,
  MdShuffle,
  MdDesignServices,
  MdVisibility,
} from "react-icons/md";

export default function AgenticAIProjectPage() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-0 border-b border-gray-200">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">
            Agentic AI Workflows for Private Equity Teams
          </h1>
          <h2 className="text-xl md:text-2xl font-normal mb-6 text-left text-gray-800">
            Designing agentic workflows for Private Equity & Venture Capital teams.
          </h2>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              {/* Placeholder for company logo */}
              <span className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center text-xs font-bold">
                Logo
              </span>
              Infinite Possibilities
            </span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <MdCalendarToday className="text-base align-middle" />
              May–Aug 2025
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <MdGroups className="text-base align-middle" />
              Founder, Product, UX, Developers
            </span>
          </div>
          <div className="w-full h-64 md:h-72 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-300 mb-4">
            <span className="text-gray-400 text-lg text-center">
              [HERO_VISUAL: A clean split-screen mock — left: chat-first agent; right: IC memo with inline refs. Subtle “agentic intelligence” glow. Minimal, premium aesthetic.]
            </span>
          </div>
          {/* Impact Highlights - now above Quick Summary */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl shadow-md p-8 mb-6">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
              Impact Highlights
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center bg-white border border-blue-200 rounded-xl px-4 py-6 shadow-sm">
                <MdGroups className="text-blue-500 text-3xl mb-2" />
                <span className="font-semibold text-gray-800 text-center">
                  Clear agentic workflows
                  <br />for deal teams
                </span>
              </div>
              <div className="flex flex-col items-center bg-white border border-blue-200 rounded-xl px-4 py-6 shadow-sm">
                <MdChat className="text-green-600 text-3xl mb-2" />
                <span className="font-semibold text-gray-800 text-center">
                  Chat-first interface
                  <br />without losing capabilities
                </span>
              </div>
              <div className="flex flex-col items-center bg-white border border-blue-200 rounded-xl px-4 py-6 shadow-sm">
                <MdEditNote className="text-purple-600 text-3xl mb-2" />
                <span className="font-semibold text-gray-800 text-center">
                  Editable, traceable
                  <br />IC memo UX
                </span>
              </div>
              <div className="flex flex-col items-center bg-white border border-blue-200 rounded-xl px-4 py-6 shadow-sm">
                <MdMeetingRoom className="text-indigo-500 text-3xl mb-2" />
                <span className="font-semibold text-gray-800 text-center">
                  Foundations for
                  <br />meeting-prep agent
                </span>
              </div>
              <div className="flex flex-col items-center bg-white border border-blue-200 rounded-xl px-4 py-6 shadow-sm">
                <MdLightbulb className="text-yellow-500 text-3xl mb-2" />
                <span className="font-semibold text-gray-800 text-center">
                  Shaped early 0→1
                  <br />product direction
                </span>
              </div>
              <div className="flex flex-col items-center bg-white border border-blue-200 rounded-xl px-4 py-6 shadow-sm">
                <MdTimeline className="text-pink-500 text-3xl mb-2" />
                <span className="font-semibold text-gray-800 text-center">
                  Scalable UX patterns
                  <br />for enterprise use
                </span>
              </div>
            </div>
          </div>

          {/* Quick Summary - full width, stacked above Impact Highlights */}
          <div className="bg-white rounded-xl shadow p-8 mb-6">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
              Quick Summary
            </span>
            <p className="text-gray-900 text-lg font-medium mt-2">
              I designed the reporting tools, chat, and meeting-prep experiences for Deal
              Advisor Agent—turning undefined requirements into clear flows and
              interaction patterns that make complex PE decisions easier, faster,
              and more structured.
            </p>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">01 — Context</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                IC Memo Preview
              </span>
              <span className="text-gray-500 text-sm">[VISUAL_PLACEHOLDER]</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                Chat Interface
              </span>
              <span className="text-gray-500 text-sm">[VISUAL_PLACEHOLDER]</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                Meeting Notes Prep
              </span>
              <span className="text-gray-500 text-sm">[VISUAL_PLACEHOLDER]</span>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 mb-4">
            <div className="font-semibold text-gray-800 mb-6">
              Private Equity & Venture Capital teams operate under:
            </div>
            <div className="flex flex-wrap gap-10 justify-center mb-2">
              <div className="flex flex-col items-center">
                <div className="w-36 h-36 rounded-full bg-blue-50 flex flex-col items-center justify-center mb-2 border border-blue-100 shadow-sm">
                  <span className="text-blue-600 text-lg font-bold mb-1">1</span>
                  <span className="text-sm text-center text-gray-700 px-4">
                    Sparse early-stage information
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-36 h-36 rounded-full bg-blue-50 flex flex-col items-center justify-center mb-2 border border-blue-100 shadow-sm">
                  <span className="text-blue-600 text-lg font-bold mb-1">2</span>
                  <span className="text-sm text-center text-gray-700 px-4">
                    Aggressive timelines
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-36 h-36 rounded-full bg-blue-50 flex flex-col items-center justify-center mb-2 border border-blue-100 shadow-sm">
                  <span className="text-blue-600 text-lg font-bold mb-1">3</span>
                  <span className="text-sm text-center text-gray-700 px-4">
                    High-stakes decisions
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-36 h-36 rounded-full bg-blue-50 flex flex-col items-center justify-center mb-2 border border-blue-100 shadow-sm">
                  <span className="text-blue-600 text-lg font-bold mb-1">4</span>
                  <span className="text-sm text-center text-gray-700 px-4">
                    Strict expectations of traceability
                  </span>
                </div>
              </div>
            </div>
            </div>
            <div>
            <p className="text-gray-800 text-base mb-2">
              When I joined, the product was in an early 0→1 stage with:
            </p>
            <ul className="list-disc ml-6 text-gray-700 text-base mb-2">
              <li>No comparable AI tools in the market</li>
              <li>No established UX patterns for agentic workflows</li>
              <li>Complex analytical reasoning embedded in the tasks</li>
              <li>No direct access to users (PE professionals)</li>
            </ul>
            <p className="text-gray-800 text-base">
              The task was to help define the first usable workflows for analysts
              evaluating deals. The platform supports 10,000+ concurrent users,
              making clarity and workflow simplicity essential even in high-scale
              environments.
            </p>
          </div>
        </div>
      </section>

      {/* My Role Section */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">02 — My Role</h2>
            <div className="flex flex-col items-center my-8">
            <div className="flex flex-row items-center gap-0 flex-wrap justify-center">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-xl bg-green-50 flex flex-col items-center justify-center border border-green-200 shadow-sm mb-2 px-2">
                    <span className="text-green-700 text-base font-bold mb-1">Understand</span>
                    <span className="text-sm text-center text-gray-700 font-medium">
                    private equity workflows (IC memos, deal reviews, meetings)
                    </span>
                </div>
                </div>
                {/* Arrow */}
                <span className="mx-2 text-3xl text-gray-400 select-none">{'→'}</span>
                {/* Step 2 */}
                <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-xl bg-green-50 flex flex-col items-center justify-center border border-green-200 shadow-sm mb-2 px-2">
                    <span className="text-green-700 text-base font-bold mb-1">Translate</span>
                    <span className="text-sm text-center text-gray-700 font-medium">
                    ambiguous feature ideas into clear UX flows
                    </span>
                </div>
                </div>
                {/* Arrow */}
                <span className="mx-2 text-3xl text-gray-400 select-none">{'→'}</span>
                {/* Step 3 */}
                <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-xl bg-green-50 flex flex-col items-center justify-center border border-green-200 shadow-sm mb-2 px-2">
                    <span className="text-green-700 text-base font-bold mb-1">Design</span>
                    <span className="text-sm text-center text-gray-700 font-medium">
                    high-fidelity screens and prototypes
                    </span>
                </div>
                </div>
                {/* Arrow */}
                <span className="mx-2 text-3xl text-gray-400 select-none">{'→'}</span>
                {/* Step 4 */}
                <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-xl bg-green-50 flex flex-col items-center justify-center border border-green-200 shadow-sm mb-2 px-2">
                    <span className="text-green-700 text-base font-bold mb-1">Iterate</span>
                    <span className="text-sm text-center text-gray-700 font-medium">
                    frequently based on domain feedback
                    </span>
                </div>
                </div>
            </div>
            </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">03 — Challenge</h2>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              <div className="flex flex-col items-center bg-blue-50 border border-blue-100 rounded-xl p-4 shadow-sm">
                <MdVisibilityOff className="text-3xl text-blue-600 mb-2" />
                <span className="font-semibold text-gray-800 text-center text-sm mb-1">
                  Sparse & evolving info
                </span>
                <span className="text-xs text-gray-500 text-center">
                  Analysts work with incomplete data
                </span>
              </div>
              <div className="flex flex-col items-center bg-blue-50 border border-blue-100 rounded-xl p-4 shadow-sm">
                <MdTimeline className="text-3xl text-blue-600 mb-2" />
                <span className="font-semibold text-gray-800 text-center text-sm mb-1">
                  Non-linear workflows
                </span>
                <span className="text-xs text-gray-500 text-center">
                  Vary by fund, not one-size-fits-all
                </span>
              </div>
              <div className="flex flex-col items-center bg-blue-50 border border-blue-100 rounded-xl p-4 shadow-sm">
                <MdEditNote className="text-3xl text-blue-600 mb-2" />
                <span className="font-semibold text-gray-800 text-center text-sm mb-1">
                  Editable & traceable outputs
                </span>
                <span className="text-xs text-gray-500 text-center">
                  Must be defensible and auditable
                </span>
              </div>
              <div className="flex flex-col items-center bg-blue-50 border border-blue-100 rounded-xl p-4 shadow-sm">
                <MdBlock className="text-3xl text-blue-600 mb-2" />
                <span className="font-semibold text-gray-800 text-center text-sm mb-1">
                  No hallucination
                </span>
                <span className="text-xs text-gray-500 text-center">
                  AI can’t obscure or invent reasoning
                </span>
              </div>
              <div className="flex flex-col items-center bg-blue-50 border border-blue-100 rounded-xl p-4 shadow-sm">
                <MdHelpOutline className="text-3xl text-blue-600 mb-2" />
                <span className="font-semibold text-gray-800 text-center text-sm mb-1">
                  No reference workflows
                </span>
                <span className="text-xs text-gray-500 text-center">
                  No pre-existing agentic patterns
                </span>
              </div>
            </div>
            <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded mt-4">
              <span className="font-semibold text-blue-800">Core problem:</span>
              <span className="text-gray-800 ml-2">
                How do you turn multi-step, high-judgment analytical work into a
                simple, trustworthy AI-assisted experience?
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            04 — How I Approached the Problem?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Step 1 */}
    <div className="flex flex-col items-center bg-white rounded-2xl shadow p-10">
      <div className="relative w-full flex flex-col items-center">
        <div className="w-full max-w-2xl h-72 bg-gray-300 rounded-2xl flex items-center justify-center mb-0">
          <span className="text-white text-3xl font-bold">Image 1</span>
        </div>
        <div
          className="absolute left-1/2"
          style={{
            top: "100%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-20 h-20 bg-blue-100 border-2 border-blue-200 rounded-full flex items-center justify-center shadow-md">
            <span className="text-3xl font-bold text-blue-800" style={{ textShadow: "0 1px 2px #fff8" }}>1</span>
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center">
        <span className="font-bold text-gray-900 mb-2 text-center text-xl">
          Understanding workflows
        </span>
        <span className="text-base text-gray-600 text-center">
          Founder discussions → sample IC memos → typical investment workflows → markup patterns.
        </span>
      </div>
    </div>
    {/* Step 2 */}
    <div className="flex flex-col items-center bg-white rounded-2xl shadow p-10">
      <div className="relative w-full flex flex-col items-center">
        <div className="w-full max-w-2xl h-72 bg-gray-300 rounded-2xl flex items-center justify-center mb-0">
          <span className="text-white text-3xl font-bold">Image 2</span>
        </div>
        <div
          className="absolute left-1/2"
          style={{
            top: "100%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-20 h-20 bg-green-100 border-2 border-green-200 rounded-full flex items-center justify-center shadow-md">
            <span className="text-3xl font-bold text-green-800" style={{ textShadow: "0 1px 2px #fff8" }}>2</span>
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center">
        <span className="font-bold text-gray-900 mb-2 text-center text-xl">
          Turning vague ideas into structured flows
        </span>
        <span className="text-base text-gray-600 text-center">
          Every feature was mapped into clear steps, logic, and system behavior (before any UI).
        </span>
      </div>
    </div>
    {/* Step 3 */}
    <div className="flex flex-col items-center bg-white rounded-2xl shadow p-10">
      <div className="relative w-full flex flex-col items-center">
        <div className="w-full max-w-2xl h-72 bg-gray-300 rounded-2xl flex items-center justify-center mb-0">
          <span className="text-white text-3xl font-bold">Image 3</span>
        </div>
        <div
          className="absolute left-1/2"
          style={{
            top: "100%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-20 h-20 bg-yellow-100 border-2 border-yellow-200 rounded-full flex items-center justify-center shadow-md">
            <span className="text-3xl font-bold text-yellow-700" style={{ textShadow: "0 1px 2px #fff8" }}>3</span>
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center">
        <span className="font-bold text-gray-900 mb-2 text-center text-xl">
          Designing interaction patterns
        </span>
        <span className="text-base text-gray-600 text-center">
          Inline controls, collapsible sections, regeneration loops, transparency cues.
        </span>
      </div>
    </div>
    {/* Step 4 */}
    <div className="flex flex-col items-center bg-white rounded-2xl shadow p-10">
      <div className="relative w-full flex flex-col items-center">
        <div className="w-full max-w-2xl h-72 bg-gray-300 rounded-2xl flex items-center justify-center mb-0">
          <span className="text-white text-3xl font-bold">Image 4</span>
        </div>
        <div
          className="absolute left-1/2"
          style={{
            top: "100%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-20 h-20 bg-purple-100 border-2 border-purple-200 rounded-full flex items-center justify-center shadow-md">
            <span className="text-3xl font-bold text-purple-800" style={{ textShadow: "0 1px 2px #fff8" }}>4</span>
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center">
        <span className="font-bold text-gray-900 mb-2 text-center text-xl">
          High-fidelity prototypes to test logic
        </span>
        <span className="text-base text-gray-600 text-center">
          Visualizing complex flows helped us refine reasoning, catch missing states, and align expectations.
        </span>
      </div>
    </div>
  </div>
        </div>
      </section>

      {/* Key Contributions */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            05 — Key Contributions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* IC Memo & Preview Notes */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <MdEditNote className="text-2xl text-blue-500" />
                <span className="font-bold text-blue-800">A. IC Memo & Preview Notes</span>
              </div>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold w-max mb-2">
                Fully implemented & live
              </span>
              <p className="text-gray-700 text-base mb-2">
                Helping analysts generate, edit, and trust AI-assisted memos.
              </p>
              <div className="text-gray-600 text-sm mb-2">
                <span className="font-semibold">Why this mattered:</span> IC memos
                are central to early deal conviction. Analysts need control,
                traceability, and the ability to iterate.
              </div>
              <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                <li>Inline references for source transparency</li>
                <li>Add/remove/customize memo sections</li>
                <li>Regenerate specific sections (not whole reports)</li>
                <li>Update source files → reflect changes in memo</li>
                <li>“Central vs feeder questions” to match real reasoning patterns</li>
              </ul>
              <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mt-2">
                <span className="text-gray-400 text-xs">
                  [Memo editor with inline references + structured sections]
                </span>
              </div>
            </div>
            {/* Chat-first Deal Advisor */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <MdChat className="text-2xl text-green-600" />
                <span className="font-bold text-green-800">B. Chat-first Deal Advisor</span>
              </div>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold w-max mb-2">
                Currently In development
              </span>
              <p className="text-gray-700 text-base mb-2">
                Transforming a feature-heavy dashboard into a conversational
                workflow.
              </p>
              <div className="text-gray-600 text-sm mb-2">
                <span className="italic">
                  “Everyone’s chatting. Can we make Deal Advisor chat as well?”
                </span>
              </div>
              <div className="text-gray-600 text-sm mb-2">
                The challenge: how to support rich capabilities inside a chat
                environment without turning everything into long messages.
              </div>
              <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                <li>Structured cards instead of long messages</li>
                <li>Collapsible sections for readability</li>
                <li>Inline edit / regenerate / expand controls</li>
                <li>System actions separated from natural language</li>
                <li>Multi-user conversation handling</li>
                <li>Clear refinement loops for long outputs</li>
              </ul>
              <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mt-2">
                <span className="text-gray-400 text-xs">
                  [Chat interface with expandable outputs + action buttons]
                </span>
              </div>
            </div>
            {/* Management Meeting Prep Agent */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <MdMeetingRoom className="text-2xl text-purple-600" />
                <span className="font-bold text-purple-800">C. Management Meeting Prep Agent</span>
              </div>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold w-max mb-2">
                Exploratory — parked
              </span>
              <p className="text-gray-700 text-base mb-2">
                Helping analysts prepare for, participate in, and summarize
                management meetings.
              </p>
              <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                <li>Pre-meeting briefs</li>
                <li>Note-taking tied to transcripts</li>
                <li>Highlighting risks, insights, and follow-ups</li>
                <li>Auto-generated summaries and action items</li>
                <li>Meeting-focused dashboard</li>
              </ul>
              <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mt-2">
                <span className="text-gray-400 text-xs">[Meeting notes workspace]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">06 — Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <MdCheckCircle className="text-3xl text-green-600 mb-2" />
              <span className="font-semibold text-green-800 mb-1">Shipped</span>
              <ul className="list-disc ml-6 text-gray-700 text-sm">
                <li>IC memo experience</li>
                <li>Preview notes</li>
                <li>Customizable reporting controls</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <MdRocketLaunch className="text-3xl text-yellow-600 mb-2" />
              <span className="font-semibold text-yellow-800 mb-1">In Development</span>
              <ul className="list-disc ml-6 text-gray-700 text-sm">
                <li>Chat-first Deal Advisor (your primary area of contribution)</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <MdOutlineDoneAll className="text-3xl text-purple-600 mb-2" />
              <span className="font-semibold text-purple-800 mb-1">In Roadmap</span>
              <ul className="list-disc ml-6 text-gray-700 text-sm">
                <li>Meeting Prep Agent</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border-l-4 border-blue-400 rounded p-4 flex flex-col items-start">
              <span className="font-semibold text-blue-800 mb-1">Value Delivered</span>
              <ul className="list-disc ml-6 text-gray-700 text-sm">
                <li>Clearer, more transparent AI outputs</li>
                <li>Faster analyst workflows</li>
                <li>Improved reasoning structure for deal work</li>
                <li>Foundation for scalable agentic patterns across the platform</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Summary */}
      <section className="py-20 pb-8 px-4 md:px-0">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">07 — Closing Summary</h2>
          <p className="text-lg text-gray-800 mb-4">
            Designing for private markets forced me to turn ambiguity into
            structured reasoning.
            <br />
            This project strengthened my ability to design agentic workflows that
            feel simple, transparent, and trustworthy—even when the domain is
            complex.
          </p>
          <Button as={Link} to="/" className="mt-10">
            ← Back to Home
          </Button>
        </div>
      </section>
    </div>
  );
}