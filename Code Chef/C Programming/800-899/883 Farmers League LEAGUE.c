//'N' teams participating in games
//games played in round robin format

//team gets 3 points if wins
//team gets 0 points if losses
//no draw/tie

//max diff btwn winning and lossing team

#include <stdio.h>
int main()
{
    int t,N;                                                                    //t-->test cases, N-->no. of teams
    scanf("%d",&t);                                                             //input of testcases
    for(int i=0;i<t;i++)                                                        //iterating test cases
    {
        scanf("%d",&N);
        if(N%2==0)
        {
            printf("%d\n",((N/2)*3));
        }
        else
        {
            printf("%d\n", ((N-1)/2)*3);
        }
    }
    return 0;
}
