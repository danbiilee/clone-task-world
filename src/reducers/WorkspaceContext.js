import React, { useReducer, createContext, useContext } from 'react';
import { MdFace, MdSentimentNeutral } from 'react-icons/md';

const initialWorkspace = [
  {
    id: 1,
    name: 'MO JAVA',
    mberList: [
      {
        mberNo: 1,
        mberId: 'danbi',
        mberNm: '이단비',
        profile: MdFace,
      },
      {
        mberNo: 2,
        mberId: 'ash',
        mberNm: '애쉬',
        profile: MdSentimentNeutral,
      },
      {
        mberNo: 3,
        mberId: 'sikk',
        mberNm: '식케이',
        profile: MdFace,
      },
      {
        mberNo: 4,
        mberId: 'moon',
        mberNm: '문',
        profile: MdSentimentNeutral,
      },
      {
        mberNo: 5,
        mberId: 'jay',
        mberNm: '박재범',
        profile: MdFace,
      },
      {
        mberNo: 6,
        mberId: 'coo',
        mberNm: '쿠기',
        profile: MdSentimentNeutral,
      },
    ],
  },
];

function wsReducer(state, action) {
  console.log('wsReducer');
}

const WsStateContext = createContext();
const WsDispatchContext = createContext();

export function WorkspaceProvider({ children }) {
  const [state, dispatch] = useReducer(wsReducer, initialWorkspace);

  return (
    <WsStateContext.Provider value={state}>
      <WsDispatchContext.Provider value={dispatch}>
        {children}
      </WsDispatchContext.Provider>
    </WsStateContext.Provider>
  );
}

export function useWsState() {
  const context = useContext(WsStateContext);
  if (!context) {
    throw new Error('Cannot find WorkspaceProvider');
  }
  return context;
}

export function useWsDispatch() {
  const context = useContext(WsDispatchContext);
  if (!context) {
    throw new Error('Cannot find WorkspaceProvider');
  }
  return context;
}
