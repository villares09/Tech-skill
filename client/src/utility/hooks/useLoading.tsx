import React, { useEffect, useState } from "react";

export function useLoading(isLoading) {
    const [ detailLoading, setDetailLoading ] = useState<any>(); 
    useEffect(() => {
        if(isLoading){
            setDetailLoading(true);
        }
        if(!isLoading && detailLoading){
            setDetailLoading(false);
        }
    }, [isLoading]);

  return {
    detailLoading
  };
}
