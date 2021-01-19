import React from 'react'
import { View, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import Colors from '../constants/Colors'
import { logout } from '../redux/actions'

const HeaderRight = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    }
    return (
        <Text onPress={handleLogout} style={{ color: Colors.light.tint, fontSize: 20, marginEnd: 16, fontWeight: 'bold' }}>Logout</Text>
    )
}

export default HeaderRight
