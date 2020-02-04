```shell
# some more ls aliases
alias ll='ls -l'
alias la='ls -A'
alias l='ls -CF'
alias chromed='google-chrome --args --disable-web-security --user-data-dir=/tmp/chromed'
alias t128='ssh root@172.31.102.128'
alias t82='ssh root@172.31.102.82'
alias t116='ssh root@172.31.102.116'
alias t151='ssh root@172.31.102.151'
alias t152='ssh root@172.31.102.152'
alias t153='ssh root@172.31.102.153'
alias t117='ssh root@172.31.102.117'
alias t207='ssh root@172.31.102.207'
alias t45='ssh root@172.31.101.45'
alias tT='ssh ubuntu@129.28.19.203'
alias tA='ssh root@119.23.236.94'
alias tHu='ssh ubuntu@119.23.236.94'
alias mp='mvn clean package -Dmaven.test.skip=true'
alias ks='kill -s 9'
alias pg='ps -ef | grep'
alias gc='git clone'
alias gitp='git push'
alias gits="git status"
alias gitc='git commit -m '
alias gita='git add '

#java envirenment
export JAVA_HOME=/usr/local/eric/jdk-11.0.5
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export JRE_HOME=$JAVA_HOME/jre

unset _JAVA_OPTIONS 
#maven envirenment
export MAVEN_HOME=/usr/local/eric/apache-maven-3.6.0
export PATH=$MAVEN_HOME/bin:$PATH

#gradle
export PATH=$PATH:/opt/gradle/gradle-5.5/bin

#groovy
export PATH=$PATH:/usr/local/eric/groovy-2.5.7/bin

# user bin
export PATH=$PATH:/home/eric/.local/bin


#golang
#go study dir
export GOPATH=/home/eric/Project/Go
#bee
export PATH=$PATH:$GOPATH/bin
#go proxy
export GO111MODULE=on
export GOPROXY=https://goproxy.io

#go lang
export GOROOT=/usr/local/eric/go
export PATH=$PATH:$GOROOT/bin

#flutter
export PATH=$PATH:/usr/local/eric/flutter/bin
```