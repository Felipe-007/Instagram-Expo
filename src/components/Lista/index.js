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

    this.mostraLikes = this.mostraLikes.bind(this)
    this.gostou = this.gostou.bind(this)
    this.carregaIcone = this.carregaIcone.bind(this)
  }

  //altera o icone like.png ou likeada.png
  carregaIcone(likeada) {
    return likeada ? require('../../img/likeada.png') : //se se nao
      require('../../img/like.png')
  }

  gostou() {
    let feed = this.state.feed

    if (feed.likeada === true) {  //likeada é o status do feed
      this.setState({
        feed: {
          ...feed,  //pega tudo que tem dentro do feed
          likeada: false,
          likers: feed.likers - 1
        }
      });
    } else {
      this.setState({
        feed: {
          ...feed,  //pega tudo que tem dentro do feed
          likeada: true,
          likers: feed.likers + 1
        }
      });
    }
  }

  //recebe quantos likes tem, , {this.mostraLikes(this.state.feed.likers)}, acessa a funcao mostraLike, onde ela recebera os dados de likers
  mostraLikes(likers) {
    let feed = this.state.feed

    if (feed.likers <= 0) {  //se o numero de likes for igual ou menor a zero nao sera mostrado
      return;
    }

    return (
      <Text style={styles.likes}>
        {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
      </Text>  //{feed.likers > 1 ? 'curtidas' : 'curtida'} faz a verificação de curtida e curtidas
    )
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
          <TouchableOpacity
            onPress={this.gostou}  //ao clicar recebera a funcao gostou
          >
            <Image
              style={styles.iconeLike}
              source={this.carregaIcone(this.state.feed.likeada)}  //mostra o coração likeado ou nao, sendo verificado pelo likeada = (this.state.feed.likeada)
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSend}>
            <Image
              style={styles.iconeSend}
              source={require('../../img/send.png')}
            />
          </TouchableOpacity>
        </View>

        {this.mostraLikes(this.state.feed.likers)}

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