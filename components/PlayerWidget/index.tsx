import React, { useEffect, useState } from "react";
import { Text, Image, View } from 'react-native';
import { Song } from "../../types";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";

import styles from "./styles";

const song = {
    id: '2',
    uri: 'https://drive.google.com/uc?export=download&id=1nMC9kUagHCyQ0TDQj4sORIyf2NxOH1vU',
    imageUri: 'https://i.ytimg.com/vi/QwOEfh-SI7g/hqdefault.jpg',
    title: 'Aiseh',
    artist: 'Skillo',
    }

const PlayerWidget = () => {
    const [sound, setSound] = useState<Sound|null>{null};
    const [isPlaying, setIsPlaying] = useState<boolean>{true};

    const onPlaybackStatusUpdate = (status) =>{
        console.log(status);
    }

    const playCurrentSong = async ()=>{
        if(sound){
           await sound.unloadAsync(); 
        }

        const {sound: newSound} = await Sound.createAsync(
            {uri: song.uri},
            {shouldPlay:isPlaying}, 
            onPlaybackStatusUpdate,
        )

        setSound(newSound)
    }


    useEffect(() => {
        playCurrentSong();
    }, [])

    const onPlayPausePress = async() => {
        if(!sound){
            return;
        }

        if(isPlaying){
            await sound.stopAsync();
        }else{
            await sound.playAsync();
        }
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: song.imageUri }} style={styles.image} />
            <View style={styles.rightContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
            <View style={styles.iconContainer}>
                <AntDesign name="hearto" size={30} color={"white"} />
                <FontAwesome name="play" size={30} color={"white"} />
            </View>
            </View>
        </View>

    )
}

export default PlayerWidget;