import { useQueries } from '@tanstack/react-query';
import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchGetFoodList, IFoodInfo } from '../apis/api';

const useFoodList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categories = searchParams.get('category')?.split(',') ?? [];
    const sortValue = searchParams.get('filter') ?? 'new';

    const [foodList, setFoodList] = useState<IFoodInfo[]>([]);
    const [sort, setSort] = useState<string>(sortValue);

    const combinedQueries = useQueries({
        queries: categories.map((cat) => {
            return { queryKey: ['food', { date: cat }], queryFn: () => fetchGetFoodList(cat) };
        }),
        combine: (results) => {
            return {
                data: results.map((result) => result.data?.meals ?? []),
                pending: results.some((result) => result.isPending),
            };
        },
    });

    /**
     * 정렬 옵션 변경
     */
    const changeSort = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSort(value);
        searchParams.delete('filter');
        searchParams.append('filter', value);
        setSearchParams(searchParams);
    };

    /**
     * 음식 목록 정렬
     */
    const sortFoodList = (data: IFoodInfo[]) => {
        switch (sort) {
            case 'new':
                return data.sort((a, b) => parseInt(b.idMeal) - parseInt(a.idMeal));
            case 'asc':
                return data.sort((a, b) => {
                    const upperCaseA = a.strMeal.toUpperCase();
                    const upperCaseB = b.strMeal.toUpperCase();

                    if (upperCaseA > upperCaseB) return 1;
                    if (upperCaseA < upperCaseB) return -1;
                    return 0;
                });
            case 'desc':
                return data.sort((a, b) => {
                    const upperCaseA = a.strMeal.toUpperCase();
                    const upperCaseB = b.strMeal.toUpperCase();

                    if (upperCaseA < upperCaseB) return 1;
                    if (upperCaseA > upperCaseB) return -1;
                    return 0;
                });
            default:
                return [];
        }
    };

    useEffect(() => {
        const sortList = sortFoodList(foodList);
        setFoodList([...sortList]);
    }, [sort]);

    useEffect(() => {
        if (!combinedQueries.pending) {
            const foodList: IFoodInfo[] = [];

            for (const data of combinedQueries.data) {
                foodList.push(...data);
            }

            const sortList = sortFoodList(foodList);
            setFoodList([...sortList]);
        }
    }, [combinedQueries]);

    return { foodList, sort, changeSort };
};

export default useFoodList;
