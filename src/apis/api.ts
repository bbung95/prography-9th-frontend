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
