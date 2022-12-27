//apresenta a lista do feed
import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";


export default class Lista extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data
    }
  }

  render() {
    return (
      <View style={styles.areaFeed}>
        <View style={styles.viewPerfil}>
          <Image
            style={styles.fotoPerfil}
            source={{ uri: this.state.feed.imgperfil }}
          />

          <Text style={styles.nomeUsuario}>
            {this.state.feed.nome}
          </Text>
        </View>

        <Image
          style={styles.fotoPublicacao}
          source={{ uri: this.state.feed.imgPublicacao }}
        />

        <View style={styles.areaBtn}>
          <TouchableOpacity>
            <Image
              style={styles.iconeLike}
              source={require('../../img/like.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSend}>
            <Image
              style={styles.iconeSend}
              source={require('../../img/send.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>
            {this.state.feed.nome}
          </Text>

          <Text style={styles.descRodape}>
            {this.state.feed.descricao}
          </Text>
        </View>
      </View>
    )
  }
}