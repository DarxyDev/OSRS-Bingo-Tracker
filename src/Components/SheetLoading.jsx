//import loadSheet from "../loadSheet";
import SheetManagerFactory from "../sheetManager";
import { useState } from "react";
import { useEffect } from "react";

export default function SheetLoading({ state, setSheetManager }) {
    const [loadState, setLoadState] = useState({ state: 'ready', sheetManager: undefined });

    switch (loadState.state) {
        case 'ready':
            setLoadState({
                sheetManager: SheetManagerFactory({
                    sheetID: import.meta.env.VITE_SHEET_ID,
                    apiKey: import.meta.env.VITE_API_KEY,
                    onLoad: () => {
                        setSheetManager(loadState.sheetManager);
                    },
                    onError: (errorMessage) => setLoadState(errorMessage),
                }),
                loadState: 'loading',
            });
        case 'loading':
            return (<>Loading...</>);
            break;
        case 'finished':
            return (<></>);
            break;
        case 'error':
            return (<>{state.sheetError}</>);
            break;
    }
}