import React from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { Colors, Fonts, ImageIcons } from '../../../common'
import styles from './styles';

export const RoundedButton = ({ customStyle, text, isOutline, ...others }) => {
    return (
        <TouchableOpacity
            style={[isOutline ? styles.outline : styles.root, {backgroundColor:"#575a5c"}, customStyle]}
            {...others}
        >
            <Text style={[isOutline ? styles.outlineButtonText : styles.buttonText]}>{text}</Text>
        </TouchableOpacity>
    )
}

export const LinkButton = ({ customStyle, text, textStyle, ...others }) => {
    return (
        <TouchableOpacity
            style={[styles.linkButton, customStyle]}
            {...others}
        >
            <Text style={[styles.buttonText, textStyle]}>{text}</Text>
        </TouchableOpacity>
    )
}

export const FloatingButton = ({ customStyle, text, ...others }) => {
    return (
        <TouchableOpacity
            style={[styles.floating, customStyle]}
            {...others}
        >
            <Text style={[styles.buttonText, { fontSize: 16, fontFamily: Fonts.HomepageBaukastenBold }]}>{text}</Text>
        </TouchableOpacity>
    )
}

export const LocationInputButton = ({ customStyle, id, title, rightIcon, iconTintColor, textStyle, theme, onOpenLocationSearch, disabled, ...others }) => {
    return (
        <View style={styles.inputRoot} key={id}>
            <Text style={[styles.title, { color: theme === "white" ? Colors.BLACK : Colors.WHITE }, textStyle]}>{title}</Text>
            <TouchableOpacity
                onPress={onOpenLocationSearch}
                disabled={disabled || false}
                style={[styles.inputContainer, { backgroundColor: theme === "white" ? Colors.WHITE : Colors.LIGHT_BLACK, borderColor: Colors.GREY, borderWidth: 1 }]}>
                {/* <Text style={{ paddingHorizontal: 5 }}>{value || ""}</Text> */}
                <TextInput
                    style={[styles.input, { color: theme === "white" ? disabled ? Colors.GREY : Colors.BLACK : Colors.WHITE }]}
                    {...others}
                    editable={false}
                />
                {
                    rightIcon &&
                    <View style={styles.iconContainer}>
                        <Image
                            source={rightIcon}
                            style={[styles.icon, iconTintColor && { tintColor: iconTintColor }]}
                        />
                    </View>
                }
            </TouchableOpacity>
        </View >
    )
}

export const DatePickerButton = ({ id, placeholder, isShowPlaceholder, value, iconTintColor, theme, onPickDate, disabled, ...others }) => {
    return (
        <TouchableOpacity
            key={id}
            onPress={onPickDate}
            // disabled={disabled || false}
            style={[styles.DatePickerContainer, { backgroundColor: theme === "white" ? Colors.WHITE : Colors.LIGHT_BLACK, borderColor: Colors.GREY, borderWidth: 1 }]}>
            <Text style={[styles.input, { color: isShowPlaceholder ? Colors.LIGHT_GREY : Colors.BLACK }]}>{isShowPlaceholder ? placeholder : value}</Text>
            <View style={styles.iconContainer}>
                <Image
                    source={ImageIcons.calendarIcon}
                    style={[styles.icon, iconTintColor && { tintColor: iconTintColor }]}
                />
            </View>
        </TouchableOpacity>
    )
}
