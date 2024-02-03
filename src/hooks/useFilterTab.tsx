import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchGetCategory } from '../apis/api';
import { ITab } from '../components/TabBox/TabBox';

const useFilterTab = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: fetchGetCategory,
    });
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentParam, setCurrentParam] = useState<string[]>(
        searchParams.get('category')?.split(',') ?? [],
    );
    const [tabs, setTabs] = useState<ITab[]>([]);

    const handleSelectCategory = (strCategory: string) => {
        searchParams.delete('category');

        // query string이 있을 경우
        if (currentParam.includes(strCategory)) {
            const tamp = currentParam.filter((cat) => cat !== strCategory);
            if (tamp.length > 0) {
                searchParams.append('category', tamp.join(','));
            }
        } else {
            const param =
                currentParam.length > 0 ? currentParam.join(',') + ',' + strCategory : strCategory;
            searchParams.append('category', param);
        }
        setSearchParams(searchParams);
    };

    useEffect(() => {
        if (!isLoading) {
            const categories = searchParams.get('category')?.split(',') ?? [];
            const newTabs: ITab[] =
                data?.categories.map((tab) => {
                    const isFocus = categories.includes(tab.strCategory);
                    return { ...tab, isFocus };
                }) ?? [];
            setTabs(newTabs);
            setCurrentParam(categories);
        }
    }, [searchParams, isLoading]);

    return { isLoading, tabs, handleSelectCategory };
};

export default useFilterTab;
