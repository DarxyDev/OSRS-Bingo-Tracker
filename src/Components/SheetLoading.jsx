//import loadSheet from "../loadSheet";
import SheetManagerFactory from "../sheetManager";
import { useState } from "react";
import { useEffect } from "react";

export default function SheetLoading({ setSheetManager }) {
    const [loadState, setLoadState] = useState({ state: 'ready', sheetManager: undefined, error: undefined });
    switch (loadState.state) {
        case 'ready':
            setLoadState({
                sheetManager: SheetManagerFactory({
                    sheetID: import.meta.env.VITE_SHEET_ID,
                    apiKey: import.meta.env.VITE_API_KEY,
                    onError: (errorMessage) => setLoadState({ errorMessage, state: 'error' }),
                }),
                state: 'loading',
            });
            break;
        case 'loading':
            loadState.sheetManager.load(() => {
                setSheetManager(loadState.sheetManager);
            })
            return (<>Loading...</>);
            break;
        case 'finished':
            return (<>Done!</>);
            break;
        case 'error':
            return (<>{loadState.errorMessage}</>);
            break;
        default:
            return( <>{loadState.state}</>)
    }
}