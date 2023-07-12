<template>
    <div>
        <div class="education" >
            <div class="content">
                <div class="edu-content" v-for="education in education" :key="education">
                    <h2>{{ education.Year }}</h2>
                    <p>{{ education.Description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'Education',
    data() {
        return {
            education : [
                {
                    "Year" : 2017,
                    "Description":"While attending Phillipi High School, I began working as a cashier at a local supermarket to support myself after classes. Juggling both work and studies was challenging, but it taught me valuable time management skills and instilled in me a strong work ethic that has carried over into my professional life. The experience also allowed me to interact with people from diverse backgrounds, enhancing my interpersonal and communication skills"
                },
                {
                    "Year" : 2019,
                    "Description":" After matriculating from Phillipi High School, I continued working at the supermarket while pursuing my career goals. Through hard work and determination, I was able to excel academically and gain practical experience in the workforce, which has set me on the path towards becoming a successful and well-rounded individual. The experience has taught me the importance of perseverance, dedication, and time management, skills that I continue to value in both my personal and professional life."
                },
                {
                    "Year" : 2021,
                    "Description":"While attending Phillipi High School, I began working as a cashier at a local supermarket to support myself after classes. Juggling both work and studies was challenging, but it taught me valuable time management skills and instilled in me a strong work ethic that has carried over into my professional life. The experience also allowed me to interact with people from diverse backgrounds, enhancing my interpersonal and communication skills"
                },
                {
                    "Year" : 2022,
                    "Description":" After matriculating from Phillipi High School, I continued working at the supermarket while pursuing my career goals. Through hard work and determination, I was able to excel academically and gain practical experience in the workforce, which has set me on the path towards becoming a successful and well-rounded individual. The experience has taught me the importance of perseverance, dedication, and time management, skills that I continue to value in both my personal and professional life."
                },
            ]
        }
    },
}
</script>
<style>
.education {
    height: 100vh;
    padding: 0% 2%;
    display: flex;
    justify-content: center;
    margin-top: 0%;
}

.content {
    width: 90%;
    height: 22%;
    text-align: justify;
    font-size: larger;
    display: grid;
    grid-template-columns: 600px 600px;
    justify-content: space-around;
}

.edu-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
}


h2 {
    margin-right: 30px;
}

p {
    width: 500px;  
}

/* .edu-content > p {
    width: 500px;
    height: 350px;
    margin: 0px;
} */


 @media screen and (max-width: 730px) {
    .education {
        height: 120vh;
    }

    .education p {
        font-size: small;
        word-wrap: break-word;
        word-break: break-all;
    }

    .content {
        font-size: larger;
    }
    
} 

 @media screen and (max-width: 500px) {
    .education {
        height: 130vh;
        justify-content: space-around;
    }

    .education p {
        font-size: small;
        word-wrap: break-word;
        word-break: break-all;
    }

    .content {
        font-size: medium;
    }

    .divider > .divider-line {
        height: 90%;
    }
    
} 
 @media screen and (max-width: 300px) {
    .education {
        height: 150vh;
    }

    .education p {
        font-size: smaller;
        word-wrap: break-word;
        word-break: break-all;
    }

    .content {
        font-size: small;
    }

    .divider > .divider-line {
        height: 90%;
    }
    
} 
    
</style>