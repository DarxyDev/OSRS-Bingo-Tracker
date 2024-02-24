import loadSheet from "../loadSheet";

export default function SheetLoading({ state, setState }) {

    if (state.sheetError) {
        console.log(state.sheetError);
        return (<>{state.sheetError}</>)
    }
    if (!state.sheetLoaded) {
        loadSheet({
            sheetID: import.meta.env.VITE_SHEET_ID,
            apiKey: import.meta.env.VITE_API_KEY,
            onLoad: (sheet) => {
                setState({
                    ...state,
                    sheetLoaded: true,
                    sheet,
                });
            },
            onError: (errorMessage) => { setState({ ...state, sheetError: errorMessage }) },
        })
        return (
            <>
                Fetching...
            </>
        )
    }
}