import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import Lista from "./src/components/Lista";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: '1',
          nome: 'Felipe Lopes',
          descricao: 'Mais um dia de muitos bugs :)',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
          likeada: false,
          likers: 0
        },
        {
          id: '2',
          nome: 'Matheus',
          descricao: 'Isso sim é ser raiz!!!!!',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
          likeada: false,
          likers: 0
        },
        {
          id: '3',
          nome: 'Jose Augusto',
          descricao: 'Bora trabalhar Haha',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
          likeada: false,
          likers: 3
        },
        {
          id: '4',
          nome: 'Gustavo Henrique',
          descricao: 'Isso sim que é TI!',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
          likeada: false,
          likers: 1
        },
        {
          id: '5',
          nome: 'Guilherme',
          descricao: 'Boa tarde galera do insta...',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false,
          likers: 32
        }
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.icons}>
            <TouchableOpacity>
              <Image
                style={styles.imgLogo}
                source={require('./src/img/Notificações.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={styles.btnAdd}
                source={require('./src/img/btnAdd.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={styles.carrinho}
                source={require('./src/img/Carrinho.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.stories}>
            <TouchableOpacity>
              <Image
                style={styles.imgStories}
                source={require('./src/img/foto-perfil.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={styles.imgStories}
                source={require('./src/img/move.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={styles.imgStories}
                source={require('./src/img/steve.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={styles.imgStories}
                source={require('./src/img/vr.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={styles.imgStories}
                source={require('./src/img/figma.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          keyExtractor={(item) => item.id}  //reconhece onde esta o id da lista
          data={this.state.feed}
          renderItem={({ item }) => <Lista data={item} />}
        />
      </View>
    )
  }
}