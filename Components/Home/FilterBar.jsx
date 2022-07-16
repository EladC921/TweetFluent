import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
// External Libraries
import { Dropdown } from "react-native-element-dropdown";
import MultiSelect from 'react-native-multiple-select';
// Styles
import root from "../../styles/root.json";
import { Icon } from "react-native-elements";

const FilterBar = (props) => {
    const tweets = props.tweets;
    // Dropdown types
    let CategoryType = [
        { id: "whisky", name: "whisky" },
        { id: "wine", name: "wine" },
        { id: "makeup", name: "makeup" },
        { id: "computers", name: "computers" },
        { id: "cocktails", name: "cocktails" },
        { id: "cellular", name: "cellular" },
        { id: "cameras", name: "cameras" },
    ];
    const uniqueCategories = [...new Set(tweets.map(tweet => tweet.SubCategory))];
    CategoryType = CategoryType.filter(category => uniqueCategories.includes(category.name));

    const influs = [...tweets.map(tweet => {
        return { id: tweet.Influ.Id, name: tweet.Influ.ScreenName }
    })];
    const influNames = [...new Map(influs.map(item => [item["id"], item])).values()];
    // useStates
    const [currentCategoryVal, setCurrentCategoryVal] = useState([]);
    const [currentInfluVal, setCurrentInfluVal] = useState([]);
    const [openInflu, setOpenInflu] = useState(false);
    const [isFocusCategory, setIsFocusCategory] = useState(false);
    const [isFocusInflu, setIsFocusInflu] = useState(false);

    useEffect(() => {
        if (currentInfluVal.length > 0 || currentCategoryVal.length > 0) {
            let _filteredTweets = tweets.filter(t => {
                if (currentInfluVal.length > 0) {
                    if (currentInfluVal.find(i => i === t.Influ.Id)) {
                        if (currentCategoryVal.length > 0) {
                            if (currentCategoryVal.includes(t.SubCategory)) {
                                return t;
                            }
                        }
                        else return t
                    }
                }
                else {
                    if (currentCategoryVal.includes(t.SubCategory)) {
                        if (currentInfluVal.length > 0) {
                            if (currentInfluVal.find(i => i === t.Influ.Id)) {
                                return t;
                            }
                        }
                        else return t;
                    }
                }
            });
            props.setFilteredTweets(_filteredTweets);
        }
        else props.setFilteredTweets(props.tweets);

    }, [currentInfluVal, currentCategoryVal])


    return (
        <>
            {/* <Dropdown
                style={[
                    styles.dropdown,
                    // isFocusCategory && { borderColor: root.twitter },
                ]}
                data={CategoryType}
                maxHeight={300}
                labelField="label"
                valueField="value"
                selectedTextStyle={styles.filterBtnText}
                // placeholder={!isFocusCategory ? currentCategoryVal : "select"}
                value={currentCategoryVal}
                // onFocus={() => setIsFocusCategory(true)}
                // onBlur={() => setIsFocusCategory(false)}
                onChange={(item) => {
                    setCurrentCategoryVal(item.value);
                    // setIsFocusCategory(false);
                }}
            /> */}
            <View style={styles.dropdownContainer}>
                <View style={styles.icon}>
                    <Icon name="funnel" type="ionicon" color={root.tertiary} size={20} />
                </View>
                <MultiSelect
                    items={CategoryType}
                    uniqueKey="id"
                    onSelectedItemsChange={items => setCurrentCategoryVal([...items])}
                    selectText="Categories"
                    selectedItems={currentCategoryVal}
                    // styleDropdownMenu={styles.dropdown}
                    // styleDropdownMenu={styles.dropdown}
                    styleItemsContainer={styles.dropdown}
                    // styleIndicator={styles.dropdownText}
                    submitButtonText="Apply filter"
                    submitButtonColor={root.twitter}
                    searchInputStyle={styles.searchInputStyle}
                    styleInputGroup={styles.inputGroup}
                    styleMainWrapper={styles.mainWrapper}
                    styleTextTag={styles.textTag}
                    tagContainerStyle={styles.tagContainerStyle}
                    tagBorderColor={root.tertiary}
                    styleListContainer={{ paddingTop: 5, paddingBottom: 5, }}
                    fontSize={14}
                />
                <MultiSelect
                    items={influNames}
                    uniqueKey="id"
                    onSelectedItemsChange={items => setCurrentInfluVal([...items])}
                    selectText="Influencers"
                    selectedItems={currentInfluVal}
                    // styleDropdownMenu={styles.dropdown}
                    // styleDropdownMenu={styles.dropdown}
                    styleItemsContainer={styles.dropdown}
                    // styleIndicator={styles.dropdownText}
                    submitButtonText="Apply filter"
                    submitButtonColor={root.twitter}
                    searchInputStyle={styles.searchInputStyle}
                    styleInputGroup={styles.inputGroup}
                    styleMainWrapper={styles.mainWrapper}
                    styleTextTag={styles.textTag}
                    tagContainerStyle={styles.tagContainerStyle}
                    tagBorderColor={root.tertiary}
                    styleListContainer={{ paddingTop: 5, paddingBottom: 5, }}
                    fontSize={14}
                />
            </View>
        </>
    )
}

export default FilterBar

const styles = StyleSheet.create({
    icon: {
        position: "absolute",
        left: 5,
        top: 5
    },

    filterBtnText: {
        color: root.secondary,
        fontSize: 12,
        fontWeight: "bold",
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,
    },

    mainWrapper: {
        width: "90%",
        flex: 5,
        marginTop: 30,
        marginRight: 5,
        marginLeft: 5,
    },

    dropdownContainer: {
        width: "100%",
        position: "relative",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
    },

    dropdown: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: root.tertiary,
        backgroundColor: root.bg,
    },

    dropdownText: { color: root.tertiary, },

    inputGroup: {
        borderTopWidth: 1.5,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: root.light,
        backgroundColor: root.bg,
        borderColor: root.tertiary,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },

    searchInputStyle: {
        backgroundColor: root.bg,
        color: root.secondary,
        padding: 5
    },

    tagContainerStyle: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },

    textTag: {
        color: root.tertiary,
        fontSize: 13,
    },
})