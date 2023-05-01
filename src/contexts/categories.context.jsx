import { createContext, useEffect, useReducer } from "react";

import { createAction } from '../utils/reducer/reducer.utils';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
    categoriesMap: {},
});

const CATEGORY_ACTION_TYPES = {
    SET_CATEGORY_MAP: 'SET_CATEGORY_MAP'
};

const categoriesReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP:
            return {
                ...state,
                categoriesMap: payload
            };
        default:
            throw new Error(`Unhandled type ${type} in categoriesReducer`);
    }
};

const INITIAL_STATE = {
    categoriesMap: {}
};

export const CategoriesProvider = ({children}) => {
    const [{ categoriesMap }, dispatch ] = useReducer(categoriesReducer, INITIAL_STATE);

    const setCategoriesMap = (categoryMap) => {
        dispatch(createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP, categoryMap));
    };

    const value = { categoriesMap };

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };

        getCategoriesMap();
    }, []);

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
};
