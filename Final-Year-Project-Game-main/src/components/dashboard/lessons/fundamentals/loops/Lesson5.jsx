import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Lesson5 = () => {
  const [loopStart, setLoopStart] = useState(0)
  const [loopEnd, setLoopEnd] = useState(5)
  const [currentIteration, setCurrentIteration] = useState(null)
  const [isRunning, setIsRunning] = useState(false)
  const [loopVariable, setLoopVariable] = useState('i')
  const [sum, setSum] = useState(0)
  const [numberToAdd, setNumberToAdd] = useState(1)
  const [isFinished, setIsFinished] = useState(false)

  const handleStart = () => {
    setIsRunning(true)
    setIsFinished(false)
    setCurrentIteration(loopStart)
    setSum(0)
    runLoop()
  }

  const runLoop = () => {
    let i = loopStart
    let currentSum = 0
    const interval = setInterval(() => {
      if (i < loopEnd) {
        currentSum += numberToAdd
        setCurrentIteration(i)
        setSum(currentSum)
        i++
      } else {
        clearInterval(interval)
        setIsRunning(false)
        setCurrentIteration(null)
        setIsFinished(true)
      }
    }, 1000)
  }

  const CodeBlock = ({ children }) => (
    <pre className='bg-gray-100 p-4 rounded-lg overflow-x-auto'>
      <code>{children}</code>
    </pre>
  )

  return (
    <div className='p-6 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6 text-center'>
        Interactive For Loop with Task
      </h1>

      <div className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>
          Task: Sum Numbers in a Loop
        </h2>
        <p className='mb-4'>
          In this example, we'll use a for loop to add a number repeatedly. You
          can set the start and end of the loop, choose the loop variable name,
          and decide what number to add in each iteration.
        </p>
        <CodeBlock>{`sum = 0
FOR ${loopVariable} FROM ${loopStart} TO ${loopEnd - 1}
    sum = sum + ${numberToAdd}
    PRINT sum
ENDFOR
PRINT "Final sum: " + sum`}</CodeBlock>
      </div>

      <div className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Interactive Example</h2>
        <div className='flex flex-wrap items-center space-x-4 mb-4'>
          <label>
            Start value:
            <input
              type='number'
              value={loopStart}
              onChange={(e) => setLoopStart(parseInt(e.target.value))}
              className='ml-2 p-1 border rounded w-16'
            />
          </label>
          <label>
            End value:
            <input
              type='number'
              value={loopEnd}
              onChange={(e) => setLoopEnd(parseInt(e.target.value))}
              className='ml-2 p-1 border rounded w-16'
            />
          </label>
          <label>
            Loop variable:
            <input
              type='text'
              value={loopVariable}
              onChange={(e) => setLoopVariable(e.target.value)}
              className='ml-2 p-1 border rounded w-8'
              maxLength='1'
            />
          </label>
          <label>
            Number to add:
            <input
              type='number'
              value={numberToAdd}
              onChange={(e) => setNumberToAdd(parseInt(e.target.value))}
              className='ml-2 p-1 border rounded w-16'
            />
          </label>
          <button
            onClick={handleStart}
            disabled={isRunning}
            className='bg-blue-500 text-white p-2 rounded disabled:bg-gray-400'
          >
            Run Loop
          </button>
        </div>

        <div className='flex flex-wrap justify-center gap-2 mb-4'>
          {Array.from({ length: loopEnd - loopStart }).map((_, index) => (
            <motion.div
              key={index}
              className={`w-16 h-16 rounded-full flex flex-col items-center justify-center text-sm font-bold ${
                index + loopStart === currentIteration
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200'
              }`}
              animate={{
                scale: index + loopStart === currentIteration ? 1.2 : 1,
                transition: { duration: 0.3 },
              }}
            >
              <div>{index + loopStart}</div>
              <div>{index + loopStart === currentIteration ? sum : ''}</div>
            </motion.div>
          ))}
        </div>

        {isFinished && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-blue-100 p-4 rounded-lg text-center text-xl font-bold'
          >
            Final Result: {sum}
          </motion.div>
        )}
      </div>

      <div className='mt-6'>
        <h2 className='text-2xl font-semibold mb-2'>Explanation</h2>
        <ul className='list-disc pl-6'>
          <li>
            The loop starts at {loopVariable} = {loopStart}
          </li>
          <li>
            It continues as long as {loopVariable} is less than {loopEnd}
          </li>
          <li>After each iteration, {loopVariable} is incremented by 1</li>
          <li>In each iteration, we add {numberToAdd} to our sum</li>
          <li>The loop runs {loopEnd - loopStart} times</li>
          <li>The final sum after all iterations is displayed at the end</li>
        </ul>
      </div>
    </div>
  )
}

export default Lesson5
