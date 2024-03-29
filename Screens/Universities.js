import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';

export default function Universities() {
    const [filters, setFilters] = useState([
        { key: 0, title: 'Fee', filter: '< 80000' },
        { key: 1, title: 'Ranking', filter: 'Top 50' },
        { key: 2, title: 'City', filter: 'Lahore' },
        { key: 3, title: 'Country', filter: 'Pakistan' },
        { key: 4, title: 'Admissions', filter: '' },
        { key: 5, title: 'Status', filter: '' },
    ])

    const [appliedfilters, setAppliedFilters] = useState([])

    const [data, setData] = useState([
        { key: 0, name: 'Comsats University', city: 'Lahore', ranking: 'Top 10', fee: 100000, rank: 8, country: 'Pakistan', image: require('../assets/comsats.jpg') },
        { key: 1, name: 'Punjab University', city: 'Lahore', ranking: 'Top 50', fee: 60000, rank: 18, country: 'Pakistan', image: require('../assets/pucit.jpg') },
        { key: 2, name: 'Kabul University', city: 'Kabul', ranking: 'Top 100', fee: 40000, rank: 88, country: 'Afghanistan', image: require('../assets/kabul.jpg') },
        { key: 3, name: 'University of Engineering and Technology', city: 'Lahore', ranking: 'Top 100', fee: 45000, rank: 88, country: 'Pakistan', image: require('../assets/uet.jpg') },
        { key: 4, name: 'University of Management and Technology', city: 'Lahore', ranking: 'Top 100', fee: 145000, rank: 98, country: 'Pakistan', image: require('../assets/umt.jpg') },
        { key: 5, name: 'PIEAS University', city: 'Islamabad', ranking: 'Top 100', fee: 45000, rank: 18, country: 'Pakistan', image: require('../assets/pieas.jpg') },
    ])

    const [displayedData, setDisplayedData] = useState(data)

    useEffect(() => {
        setDisplayedData(applyFilters())
    }, [appliedfilters])

    const addFilter = (item) => {
        if (appliedfilters.filter(newItem => newItem.title === item.title).length) { return }
        else {
            setAppliedFilters(prev => {
                prev.push(item)
                return [...prev]
            })
        }
    }

    const handleDeleteFilter = (item) => {
        setAppliedFilters(prev => prev.filter(newItem => newItem.title !== item.title))
    }

    const applyFilters = () => {
        let newData = data
        appliedfilters.forEach(item => {
            switch (item.title) {
                case 'City':
                    newData = newData.filter(newItem => newItem.city === item.filter)
                    return
                case 'Country':
                    newData = newData.filter(newItem => newItem.country === item.filter)
                    return
                case 'Fee':
                    newData = newData.filter(newItem => newItem.fee <= 80000)
                    return
                case 'Ranking':
                    newData = newData.filter(newItem => newItem.rank < 50)
                    return
            }
        })
        return newData
    }

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: "white", height: 50, justifyContent: 'center', alignItems: 'center', margin: 8, elevation: 20, marginBottom: 10 }}>
                <Text style={{ fontSize: 20, color: 'grey' }}>Total Institutes: {displayedData.length}</Text>
            </View>
            <View>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={filters}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            style={{ backgroundColor: "lightgrey", height: 40, marginLeft: 8, borderRadius: 5, justifyContent: 'center', paddingHorizontal: 20 }}
                            onPress={() => addFilter(item)}
                        >
                            <Text style={{ fontSize: 14, color: 'black', opacity: 0.7 }}>{item.title}</Text>
                        </TouchableOpacity>
                    }
                    keyExtractor={(item) => item.key}
                />
                <FlatList
                    style={{ marginVertical: 10 }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={appliedfilters}
                    extraData={appliedfilters}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            style={{ backgroundColor: "#d93226", height: 40, marginLeft: 8, borderRadius: 5, justifyContent: 'center', paddingHorizontal: 20 }}
                            onPress={() => handleDeleteFilter(item)}
                        >
                            <View style={{ backgroundColor: 'white', opacity: 0.85, width: 18, height: 18, borderBottomLeftRadius: 10, alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, top: 0 }}>
                                <Text style={{ fontSize: 8 }}>❌</Text>
                            </View>
                            <Text style={{ fontSize: 14, color: 'white' }}>{item.title} {item.filter}</Text>
                        </TouchableOpacity>
                    }
                    keyExtractor={(item) => item.key}
                />
            </View>
            <FlatList
                data={displayedData}
                extraData={displayedData}
                renderItem={({ item }) =>
                    <TouchableOpacity style={{ flexDirection: 'row', margin: 5, alignItems: 'center', elevation: 10, backgroundColor: 'white', padding: 5, paddingVertical: 20 }}>
                        <View style={{ padding: 5, marginRight: 10 }}>
                            <Image source={item.image} style={{ width: 120, height: 130 }} />
                        </View>
                        <Text style={{ backgroundColor: "#d93226", color: 'white', padding: 5, borderBottomLeftRadius: 10, position: 'absolute', right: 0, top: 0 }}>{item.name}</Text>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 17 }}>Fee: {item.fee}</Text>
                            <Text style={{ fontSize: 17 }}>Rank: {item.rank}</Text>
                            <Text style={{ fontSize: 17 }}>City: {item.city}</Text>
                            <Text style={{ fontSize: 17 }}>Country: {item.country}</Text>
                        </View>
                    </TouchableOpacity>
                }
                keyExtractor={(item) => item.key}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
