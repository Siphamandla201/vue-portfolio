<template>
    <div>
        <div class="education" >
            <div class="content">
                <div v-for="education in education" :key="education">
                    <h2>{{ education.Year }}</h2>
                    <p>{{ education.Description }}</p>
                </div>
            </div>
            <div class="divider">
                <div class="divider-line"></div>
            </div>
            <div class="content">
                <div  v-for="experience in experience" :key="experience">
                  <h2>{{ experience.Year }}</h2>
                  <p>{{ experience.Description }}</p>
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
                    "Description":"Started attending Phillipi High School, and worked at a local super market as a cashier after school"
                },
                {
                    "Year" : 2019,
                    "Description":" Matriculated at Phillipi High School in Samora Machelle."
                },
            ],
            experience : [
                {
                    "Year" : 2022,
                    "Description":"i did alot of volunteer work, helping out at my local after school program and cleaning the neighborhood. i also worked for an agency called Drive Force where I did different tasks, from being picker, consolidator, mover for companies like clicks and ok"
                },
                {
                    "Year" : "2022 - Currently",
                    "Description":"A coding program that provides you with the core fundamentals of Web Development and  and a library of coding languages. We are taught interpersonal and self-development skills to take us further in life."
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
    justify-content: space-between;
    margin-top: 0%;
}

.content {
    width: 45%;
    height: 22%;
    padding: 15px;
    text-align: justify;
    flex-direction: column;
    font-size: larger;
}

.divider {
   width: 5%;
   position: relative; 
}

.divider > .divider-line {
  content: "";
  position: absolute;
  width: 3px;
  background-color: #2c3e50;
  top: 0px;
  bottom: 0px;
  left: 50%;
  margin-left: -3px;
  height: 80%;
}

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