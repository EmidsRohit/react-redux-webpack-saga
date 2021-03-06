const initState = {
    count: 0,
    studies: [
        {
            id: 1,
            study_name: 'Statin Intolerance',
            study_start_date: '01/10/2020',
            study_completion_date: '',
            protocol_id: 'ProtocolID 1',
            study_group: 'Group 1',
            phase: 'Phase 1',
        },
        {
            id: 2,
            study_name: 'Heart Failure',
            study_start_date: '12/01/2010',
            study_completion_date: '15/01/2015',
            protocol_id: 'ProtocolID 2',
            study_group: 'Group 2',
            phase: 'Phase 2',
        },
        {
            id: 3,
            study_name: 'Myocardial Infarction',
            study_start_date: '14/02/2005',
            study_completion_date: '16/01/2010',
            protocol_id: 'ProtocolID 3',
            study_group: 'Group 3',
            phase: 'Phase 3',
        },
        {
            id: 4,
            study_name: 'APV-IN.PACT AV Access',
            study_start_date: '15/06/2002',
            study_completion_date: '10/01/2010',
            protocol_id: 'ProtocolID 4',
            study_group: 'Group 4',
            phase: 'Phase 4',
        },
    ],
}

const globalReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_STUDIES': {
            return { ...state, studies: action.studies }
        }
        default:
            return state
    }
}

export default globalReducer
