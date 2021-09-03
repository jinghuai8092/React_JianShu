import React, { Component } from 'react';
import {
    RecommendWrapper,
    RecommendItem
}
    from '../style';
class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>
                <RecommendItem imgUrl='https://lh3.googleusercontent.com/proxy/U6zULlD-JVQkcbIHvjMXgMgj5ATMJumvQSqnFHjWxyOgXzm0SCosdz0XkdMACQDvAJrUiGNS9QxL_bJmKTvcu9_pGTg4b_Rqne5zD0Rs'>


                </RecommendItem>
                <RecommendItem imgUrl='https://lh3.googleusercontent.com/proxy/oVt6GWKcOQqQlhYMLWm4C205SZamZ_zH0nA32O5sbkgLqMfqXIplTA_NNAzMBZQylpN3KBbIB254v1nGwXGJaEar_aIteSX84eUlJ7Ded4AWh_P64OvEzuPsB7HSiYFxdWiHXFqbF0u8yAbSUGZmo11EoP4lcqnYa32jn3hrAqWZlNhU2w'>

                    
                </RecommendItem>
            </RecommendWrapper>
        )
    }
}
export default Recommend;