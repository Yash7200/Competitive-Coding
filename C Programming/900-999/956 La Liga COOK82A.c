//Madrid play against Malaga
//Barcelona play against Eibar

//Madrid **already 3 points ahead of Barcelona

//Madrid will win,except 1 scenario
//If Madrid loses against Malaga & Barcelona wins against Eibar
//then title will be given to Barcelona.

//In any other combination title will be given to Madrid

//team wins if score is more than opponent.

//b --> score of Barcelona
//m --> score of Malaga
//r --> score of Madrid
//e --> score of Elibar
#include <stdio.h>
int main(void)
{
    int t;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        int b,m,r,e;
        char tb[11];
        for(int j=0;j<4;j++)
        {
            int score;
            scanf("%s %d",tb,&score);
            if(tb[0]=='B')
            {
                b=score;
            }
            else if(tb[0]=='M')
            {
                m=score;
            }
            else if(tb[0]=='R')
            {
                r=score;
            }
            else if(tb[0]=='E')
            {
                e=score;
            }
        }
        if(r<m && b>e)
        {
            printf("Barcelona\n");
        }
        else
        {
            printf("RealMadrid\n");
        }
    }
	return 0;
}