import React, {useState, useEffect} from 'react'
import { Options } from '../components/Options';
import { ConsumerInfo } from '../components/ConsumerInfo';
import { Loader } from '../components/Loader';

export const List = () => {
    const [hasError, setError] = useState();
    const [listData, setlistData] = useState([]);
    const [loading, setIsLoading] = useState(false);  
  
    const [filter, setFilter] = useState('');
  
    const [listItems, setListItems] = useState(10);
    
  
    async function fetchData() {
  
        const res = await fetch('https://green-meadow-0b6c10003.azurestaticapps.net/building-location.json');
            res.json()
                .then(res => {
                    setlistData(res.locations.flatMap(tennant => tennant.consumers))
                    setIsLoading(false)
                })
                .catch(err => setError(err))
        }
        
        useEffect(() => {
            setIsLoading(true)
            fetchData();
        }, []);
    if (loading) {
        return (
            <div>Loading...</div>
        )
    }
  
  
    if (hasError) {
        return (
            <div>ERROR</div>
        )
    }
  
  
  
    const filtered = filter
    ? listData.filter(consumer =>
      filter === 'mobile' && consumer.isPhoneMobile
      )
    : listData;
  
    return (
        <>
        <div className='container'>
          <Options filter={filter} setFilter={setFilter}  />
          {filtered.map(consumer => <ConsumerInfo consumer={consumer}/>)}
          <Loader listItems={listItems} setListItems={setListItems}/>
        </div>
        </>
    );
  

  }
