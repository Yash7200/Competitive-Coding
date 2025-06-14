//'N' balls

//on <i>th ball runs are A<i>

//strike formula: (total runs till that ball/current ball)*100
#include <stdio.h>
int main()
{
    int t,N;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d",&N);
        int a[N],run=0,cnt=0;
        for(int j=0;j<N;j++)
        {
            scanf("%d",&a[j]);
            run=run+a[j];
            float strike=(run*100.00) / (j+1);
            if(strike==100)
            {
                cnt++;
            }
        }
        printf("%d\n",cnt);
    }
    return 0;
}
