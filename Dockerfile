# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.


FROM node:7.0.0

MAINTAINER xxx@gmail.com

LABEL org.radar-cns.docker.radar-dashboard

EXPOSE 

#Install RADAR-Dashboard App
RUN echo "===> Installing Components"
    && apt-get -qq update \
    && apt-get install git \
    && cd /opt \
    && git clone https://github.com/RADAR-CNS/RADAR-Dashboard.git \
    && 

