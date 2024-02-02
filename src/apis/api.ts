import axios from 'axios';

export interface ICategory {
    idCategory: string;
    strCategory: string;
    strCategoryDescription: string;
    strCategoryThumb: string;
}

interface ICategoryResponse {
    categories: ICategory[];
}

/**
 * 카테고리 API
 */
export const fetchGetCategory = async () => {
    try {
        const res = await axios<ICategoryResponse>({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export interface IFoodInfo {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}

interface IFoodListResponse {
    meals: IFoodInfo[];
}

/**
 * 음식 목록 API
 */
export const fetchGetFoodList = async (strCategory: string) => {
    try {
        const res = await axios<IFoodListResponse>({
            method: 'get',
            url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
